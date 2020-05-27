<template>
  <div class="resultForm">
    <span>
      다음과 관련된 콘텐츠 :
      <b>{{ value }}</b>
    </span>
    <span class="resultTotal">토탈 값: {{ resultTotalCount }}</span>
    <ul>
      <li v-for="item in $store.state.movie" :key="item.DOCID">
        <h3>{{ replaceName(item.title) }}</h3>
        <a :href="item.kmdbUrl"><img :src="srcCheck(item.posters)"/></a>
      </li>
    </ul>
  </div>
</template>

<script>
// import { eventBus } from '../main';
import { log } from 'util';
export default {
  data() {
    return {
      value: this.$store.state.value,
      selectedType: this.$store.state.type,
    };
  },
  computed: {
    resultMovie() {
      return this.$store.state.movie;
    },
    resultTotalCount() {
      return this.$store.state.count;
    },
    // replaceName(name){
    //   return name.replace(/!HS|!HE|\s/g, '')
    // }
  },
  created() {
    // eventBus.$on('loadMovie', inputValue => {
    //   this.value = inputValue;
    // });
    this.$store.dispatch('FECH_MOVIE', `${this.selectedType}=${this.value}`);

    // this.movieResult = this.$store.state.movie;
  },
  methods: {
    replaceName(name){ // 검색시 뜨는 !HS 와 !HE 제거 
      return name.replace(/!HS|!HE|\s/g, '')
    },
    srcCheck(item) {
      // poster 주소를 인자로 받아와서
      if (item.includes('|')) {
        //|가 포함되있다면(중복될때 | 가 들어감)
        return item.substring(0, item.indexOf('|'));
        // substring 으로 0번째 글자부터 |의 위치를 받아와서 자른다.
        // substring([시작위치], [종료위치]);
      } else if (item === '') {
        // 포스터 주소가 비어져 있을때
        return 'http://placehold.it/213x316';
      } else return item;
      // | 를 포함하지 않는다는 것은 주소가 중복이 아니기 때문에 리턴해준다.
    },
  },
};
</script>

<style></style>
