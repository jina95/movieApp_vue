<template>
  <ul class="GenreSelectbuttons">
    <li v-for="item in 장르" :key="item">
      <button @click="submitKeyword(item)" class="cover">
        <!-- {{ item }} -->
      </button>
      <span>{{ item }}</span>
    </li>
  </ul>
</template>

<script>
import { saveTypeToCookie, saveValueToCookie } from '../utils/cookies';
export default {
  data() {
    return {
      genreValue: '',
      장르: [
        '로맨스',
        '재난',
        '히어로',
        '코미디',
        '판타지',
        '공포',
        '뮤지컬',
        '추리',
      ],
    };
  },
  methods: {
    submitKeyword(value) {
      this.$store.commit('SET_VALUE', value);
      this.$store.commit('SET_TYPE', 'keyword');
      // 쿠키에 저장
      saveValueToCookie(value);
      saveTypeToCookie('keyword');
      this.$router.push('/result');
    },
  },
};
</script>

<style></style>
