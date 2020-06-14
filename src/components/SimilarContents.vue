<template>
  <div class="inforSimilarContent">
    <h5>{{ movieGenre }}와 비슷한 컨텐츠</h5>
    <ul>
      <li
        v-for="item in this.$store.state.movie"
        :key="item.DOCID"
        v-show="recommendMovies(item.DOCID)"
      >
        <img :src="srcPosterCheck(item.posters)" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
import { srcCheck } from '../utils/filters';
export default {
  data() {
    return {
      movieGenre: this.$store.state.value,
      mainMovie: this.$store.state.inforMovie,
    };
  },
  computed: {
    similarMovie() {
      return this.$store.state.movie;
    },
  },
  created() {
    this.$store.dispatch('FECH_SIMILARMOVIE', `keyword=${this.movieGenre}`);
  },
  methods: {
    srcPosterCheck(item) {
      // 포스터 주소 확인 함수
      return srcCheck(item);
    },
    recommendMovies(item) {
      // 키워드로 컨텐츠를 추천해주기때문에, 이미 위에 제시되어있는 컨텐츠는 걸러주는것이 필요.
      return item !== this.mainMovie.DOCID; // DOCID 로 비교
    },
  },
};
</script>

<style></style>
