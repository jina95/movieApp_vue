<template>
  <div>{{ resultMovie }}</div>
</template>

<script>
import { eventBus } from '../main';
import { log } from 'util';
export default {
  data() {
    return {
      value: this.$store.state.value,
    };
  },
  computed: {
    resultMovie() {
      return this.$store.state.movie;
    },
  },
  created() {
    // eventBus.$on('loadMovie', inputValue => {
    //   this.value = inputValue;
    // });
    this.$store.dispatch('FECH_MOVIE', `title=${this.value}`);
  },
  methods: {},
};
</script>

<style></style>
