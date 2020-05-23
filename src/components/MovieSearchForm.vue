<template>
  <form @submit.prevent="submitForm">
    <select v-model="selectedType">
      <option disabled value="">Please select one</option>
      <option value="title">제목</option>
      <option value="director">감독</option>
      <option value="actor">배우</option>
      <option value="keyword">키워드</option>
    </select>
    <input type="text" placeholder="제목을 입력하세요" v-model="inputValue" />
    <button type="submit"></button>
  </form>
</template>

<script>
import { eventBus } from '../main';
export default {
  data() {
    return {
      inputValue: '',
      selectedType: '',
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
