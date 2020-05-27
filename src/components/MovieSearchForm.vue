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
  created() {},
  methods: {
    submitForm() {
      // 타입을 선택하지 않거나, 검색어가 비어져있을때
      if (this.inputValue === '') return alert('검색어를 입력해주세요.');
      // eventBus.$emit('loadMovie', this.inputValue);
      this.$store.commit('SET_VALUE', this.inputValue);
      this.$store.commit('SET_TYPE', this.selectedType);
      this.$router.push('/result');
      // this.$store.dispatch('FECH_MOVIE', `director=${this.inputValue}`);
      // this.$store.dispatch('FECH_MOVIE', `title=${this.inputValue}`);
    },
  },
};
</script>

<style></style>
