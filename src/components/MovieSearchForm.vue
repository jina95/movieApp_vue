<template>
  <form @submit.prevent="submitForm">
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
      this.$router.push('/result');
      // this.$store.dispatch('FECH_MOVIE', `director=${this.inputValue}`);
      // this.$store.dispatch('FECH_MOVIE', `title=${this.inputValue}`);
    },
  },
};
</script>

<style></style>
