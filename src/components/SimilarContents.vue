<template>
  <div class="inforSimilarContent">
    <h5>{{ movieGenre }}와 비슷한 컨텐츠</h5>
    <ul class="result_list">
      <li
        v-for="item in $store.state.movie"
        :key="item.DOCID"
        v-show="recommendMovies(item.DOCID)"
      >
        <div class="result_head">
          <h3>{{ replaceName(item.title) }}</h3>
          <!-- <div class="favoriteBtnBox">
              <button v-if="!heartMode" v-on:click="heartOn(item)">
                <i click="" class="far fa-heart"></i>
              </button>
              <button v-else v-on:click="heartOff">
                <i click="" class="fas fa-heart"></i>
              </button>
            </div> -->
        </div>
        <a><img :src="srcPosterCheck(item.posters)"/></a>
        <div class="movieInfor" @click.prevent="goToInforPage(item)">
          <span>감독: {{ item.directors.director[0].directorNm }}</span>
          <p>{{ item.plots.plot[0].plotText }}</p>
        </div>
      </li>
    </ul>
    <!-- <ul>
      <li
        v-for="item in this.$store.state.movie"
        :key="item.DOCID"
        v-show="recommendMovies(item.DOCID)"
      >
        <img :src="srcPosterCheck(item.posters)" alt="" />
      </li>
    </ul> -->
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
    replaceName(name) {
      // 검색시 뜨는 !HS 와 !HE 제거
      return name.replace(/!HS|!HE|\s/g, '');
    },
    srcPosterCheck(item) {
      // 포스터 주소 확인 함수
      return srcCheck(item);
    },
    recommendMovies(item) {
      console.log(this.$store.state.inforMovie.DOCID);

      // 키워드로 컨텐츠를 추천해주기때문에, 이미 위에 제시되어있는 컨텐츠는 걸러주는것이 필요.
      // return item !== this.mainMovie.DOCID; // DOCID 로 비교 / 이렇게 했더니 undifined가 뜬다 무슨일 일까
      return item !== this.$store.state.inforMovie.DOCID; // DOCID 로 비교
    },
    goToInforPage(item) {
      let firstGenre = item.genre.substring(0, item.genre.indexOf(','));
      // 첫번째 키워드 확인

      this.$store.commit('SET_INFORMOVIE', item);
      // this.$store.commit('SET_MOVIEID', item.movieId);
      // this.$store.commit('SET_MOVIESEQ', item.movieSeq);
      this.$store.commit('SET_SIMILARKEYWORD', firstGenre);

      // 쿠키에 저장
      saveMovieIdToCookie(this.$store.state.movieId);
      saveMovieSeqToCookie(this.$store.state.movieSeq);
      saveSimilarKeywordToCookie(firstGenre);

      // 인포창으로 이동
      this.$router.push('/information');
    },
    // liWidthCheck() {
    //   let lis = document.querySelectorAll('.inforSimilarContent li');
    //   return `width:${lis.width}*${lis.length}px`;
    // },
  },
};
</script>

<style></style>
