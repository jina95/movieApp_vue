<template>
  <div>
    <MovieSearchForm></MovieSearchForm>
    <!-- <MovieResultContents></MovieResultContents> -->
    <!-- <form @submit.prevent="submitForm">
      <input type="text" placeholder="제목을 입력하세요" v-model="inputValue" />
      <button type="submit"></button>
    </form> -->
    <!-- {{ loadMovie }} -->
  </div>
</template>

<script>
import MovieSearchForm from '../components/MovieSearchForm.vue';
// import MovieResultContents from '../components/MovieResultContents';
export default {
  components: { MovieSearchForm },
};
</script>

<style></style>
