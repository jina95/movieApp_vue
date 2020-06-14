<template>
  <div class="inforContent">
    <div class="infor_main">
      <div class="main_poster">
        <img :src="moviePoster()" alt="" />
      </div>
      <div class="main_text">
        <h2>{{ movieTitle }}({{ inforMovie.prodYear }})</h2>
        <em class="eng_title">{{ inforMovie.titleEng }}</em>
        <span class="genre_nation"
          >{{ inforMovie.genre }} {{ inforMovie.nation }}</span
        >
        <span class="repRlsDate">{{ inforMovie.repRlsDate }}(개봉)</span>
        <span>{{ inforMovie.runtime }}분, </span>
        <span>{{ isRatingGrade() }}</span>
        <div>
          <span>감독 : </span>
          <em>{{ isDirectorNm() }}</em>
        </div>
        <span>출연진 : </span>
        <ul class="actor" v-bind="threeActors()">
          <li v-for="actor in actors" :key="actor.index">{{ actor }},</li>
        </ul>
      </div>
    </div>
    <div class="infor_story">
      <span>줄거리</span>
      <p>{{ inforMovie.plots.plot[0].plotText }}</p>
    </div>
    <div class="infror_stlls">
      <ul v-bind="stllImgCheck(inforMovie.stlls)">
        <li v-for="src in stllImgArray" :key="src.index">
          <img :src="src" alt="" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { srcCheck } from '../utils/filters';

export default {
  data() {
    return {
      지금영화: this.$store.state.inforMovie,
      stllImgArray: [],
      actors: [],
      movieId: this.$store.state.movieId,
      movieSeq: this.$store.state.movieSeq,
    };
  },
  computed: {
    inforMovie() {
      return this.$store.state.inforMovie;
    },
    movieTitle() {
      return this.$store.state.inforMovie.title;
    },
  },
  created() {
    this.$store.dispatch(
      'FECH_INFORMOVIE',
      `movieId=${this.movieId}&movieSeq=${this.movieSeq}`,
    );
  },
  methods: {
    // 포스터 주소 확인
    moviePoster() {
      return srcCheck(this.$store.state.inforMovie.posters);
    },
    // 연령가 확인 (|를 포함하고 반복한 경우가 많음)
    isRatingGrade() {
      let itemStr = this.$store.state.inforMovie.ratings.rating[0].ratingGrade;
      return itemStr.search('|')
        ? itemStr.substring(0, itemStr.indexOf('|'))
        : itemStr;
    },
    // 감독 이름
    isDirectorNm() {
      return this.$store.state.inforMovie.directors.director[0].directorNm;
    },
    // 배우 3명 추리기
    threeActors() {
      let itemStr = this.$store.state.inforMovie.actors;
      for (let i = 0; i < 3; i++) {
        if (this.actors.length > 2) return;
        this.actors.push(itemStr.actor[i].actorNm);
      }
    },
    // 스틸이미지 주소
    stllImgCheck(item) {
      this.stllImgArray = item.split('|');
    },
  },
};
</script>

<style></style>
