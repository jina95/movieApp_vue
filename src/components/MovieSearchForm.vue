<template>
  <form @submit.prevent="submitForm" class="searchForm">
    <select v-model="selectedType">
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
    <input type="text" placeholder="검색어를 입력하세요" v-model="inputValue" />
    <button type="submit"><i class="fas fa-search"></i></button>
  </form>
</template>

<script>
import { eventBus } from '../main';
import {
  saveTypeToCookie,
  saveValueToCookie,
  deleteCookie,
} from '../utils/cookies';

export default {
  data() {
    return {
      inputValue: '',
      selectedType: 'title',
      options: [
        { text: '제목', value: 'title' },
        { text: '감독', value: 'director' },
        { text: '배우', value: 'actor' },
        { text: '키워드', value: 'keyword' },
      ],
    };
  },
  computed: {
    // loadMovie() {
    //   return this.$store.state.movie;
    // },
  },
  created() {
    // 메인페이지에 오면 쿠키를 지운다.
    deleteCookie('til_type');
    deleteCookie('til_value');
    deleteCookie('til_movieId');
    deleteCookie('til_movieSeq');
    deleteCookie('til_similarKeyword');
    // 스토어도 지운다.
    this.$store.commit('ClearMovie');
    this.$store.commit('ClearInforMovie');
  },
  methods: {
    submitForm() {
      // 타입을 선택하지 않거나, 검색어가 비어져있을때
      if (this.inputValue === '') return alert('검색어를 입력해주세요.');
      this.$store.commit('SET_VALUE', this.inputValue);
      this.$store.commit('SET_TYPE', this.selectedType);
      // 쿠키에 저장
      saveValueToCookie(this.inputValue);
      saveTypeToCookie(this.selectedType);
      // 페이지 이동
      this.$router.push('/result');
    },
  },
};
</script>

<style></style>
