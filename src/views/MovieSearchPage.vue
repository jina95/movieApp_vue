<template>
  <div>
    <MovieSearchForm></MovieSearchForm>
    <GenreSelectForm></GenreSelectForm>
  </div>
</template>

<script>
import MovieSearchForm from '@/components/MovieSearchForm.vue';
import GenreSelectForm from '@/components/GenreSelectForm.vue';
// import MovieResultContents from '../components/MovieResultContents';
export default {
  components: { MovieSearchForm, GenreSelectForm },
};
</script>

<style></style>
