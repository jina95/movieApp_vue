<template>
  <div class="GenreSelectbuttons">
    <button @click="submitKeyword(item)" v-for="item in 장르" :key="item">
      {{ item }}
    </button>
  </div>
</template>

<script>
import { saveTypeToCookie, saveValueToCookie } from '../utils/cookies';
export default {
  data() {
    return {
      genreValue: '',
      장르: [
        'SF',
        '로맨스',
        '드라마',
        '액션',
        '판타지',
        '미스터리',
        '멜로드라마',
        '공포',
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
