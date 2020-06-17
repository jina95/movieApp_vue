<template>
  <div class="resultForm">
    <div v-if="resultTotalCount > 0">
      <span>
        다음과 관련된 콘텐츠 :
        <b>{{ value }}</b>
      </span>
      <span class="resultTotal">토탈 값: {{ resultTotalCount }}</span>
      <ul class="result_list">
        <li v-for="item in $store.state.movie" :key="item.DOCID">
          <div class="result_head">
            <h3>{{ replaceName(item.title) }}</h3>
            <div class="favoriteBtnBox">
              <button v-if="!heartMode" v-on:click="heartOn(item)">
                <i click="" class="far fa-heart"></i>
              </button>
              <button v-else v-on:click="heartOff">
                <i click="" class="fas fa-heart"></i>
              </button>
            </div>
          </div>
          <a><img :src="srcPosterCheck(item.posters)"/></a>
          <div class="movieInfor" @click.prevent="goToInforPage(item)">
            <span>감독: {{ item.directors.director[0].directorNm }}</span>
            <p>{{ item.plots.plot[0].plotText }}</p>
          </div>
        </li>
      </ul>
    </div>
    <div v-else>
      <span>일치하는 값이 없습니다.</span>
    </div>
  </div>
</template>

<script>
import { log } from 'util';
import {
  saveMovieIdToCookie,
  saveMovieSeqToCookie,
  saveValueToCookie,
  saveSimilarKeywordToCookie,
  saveHeartMIToCookie,
  saveHeartMSToCookie,
  deleteCookie,
} from '../utils/cookies';
import { srcCheck } from '../utils/filters';

export default {
  data() {
    return {
      value: this.$store.state.value,
      selectedType: this.$store.state.type,
      selectPoster: '',
      heartMode: false,
    };
  },
  computed: {
    resultMovie() {
      return this.$store.state.movie;
    },
    resultTotalCount() {
      return this.$store.state.count;
    },
  },
  created() {
    this.$store.dispatch('FECH_MOVIE', `${this.selectedType}=${this.value}`);
  },
  methods: {
    replaceName(name) {
      // 검색시 뜨는 !HS 와 !HE 제거
      return name.replace(/!HS|!HE|\s/g, '');
    },
    srcPosterCheck(item) {
      // 포스터 주소 체크 (중복여부 & | 체크)
      return srcCheck(item);
    },
    goToInforPage(item) {
      let firstGenre = item.genre.substring(0, item.genre.indexOf(','));
      // 첫번째 키워드 확인

      this.$store.commit('SET_INFORMOVIE', item);
      this.$store.commit('SET_SIMILARKEYWORD', firstGenre);

      // 쿠키에 저장
      saveMovieIdToCookie(this.$store.state.movieId);
      saveMovieSeqToCookie(this.$store.state.movieSeq);
      saveSimilarKeywordToCookie(firstGenre);

      // 인포창으로 이동
      this.$router.push('/information');
    },
    heartOn(item) {
      item.heartMode = 'aa';
      this.heartMode = true;
      console.log(item);

      // 쿠키 저장
      saveHeartMIToCookie(item.movieId);
      saveHeartMSToCookie(item.movieSeq);
    },
    heartOff() {
      this.heartMode = false;

      // 쿠키 삭제
      deleteCookie('til_heartMI');
      deleteCookie('til_heartMS');
    },
  },
};
</script>

<style></style>
