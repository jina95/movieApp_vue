<template>
  <div class="inforContent">
    <div class="infor_main">
      <div class="main_poster">
        <img :src="moviePoster" />
      </div>
      <div class="main_text">
        <h2>{{ movieTitle }}({{ movie.prodYear }})</h2>
        <em class="eng_title">{{ movie.titleOrg }}</em>
        <span class="genre_nation">{{ movie.genre }} {{ movie.nation }}</span>
        <span class="repRlsDate">{{ movie.repRlsDate }}(개봉)</span>
        <span>{{ movie.runtime }}분, </span>
        <span>{{ movie.ratings.rating[0].ratingGrade }}</span>
        <div>
          <span>감독 : </span>
          <em>{{ movie.directors.director[0].directorNm }}</em>
        </div>
        <!-- <ul>
          출연진 :
          <li
            class="actor"
            v-for="item in movie.actors.actor"
            :key="item.actorId"
          >
            {{ item.actorNm }}
          </li>
        </ul> -->
        <ul class="actor">
          출연진 :
          <li>{{ movie.actors.actor[0].actorNm }},</li>
          <li>{{ movie.actors.actor[1].actorNm }},</li>
          <li>{{ movie.actors.actor[2].actorNm }}</li>
        </ul>
      </div>
    </div>
    <div class="infor_story">
      <span>줄거리</span>
      <p>{{ movie.plots.plot[0].plotText }}</p>
    </div>

    <div class="infror_stlls">
      <ul v-bind="stllImgCheck(movie.stlls)">
        <li v-for="src in stllImgArray" :key="src.index">
          <img :src="src" alt="" />
        </li>
      </ul>
      <!-- <div class="infror_stlls">
        <img v-for="src in stllImgArray" :key="src.index" :src="src" alt="" />
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: this.$store.state.inforMovie,
      movieTitle: this.$store.state.inforTitle,
      moviePoster: this.$store.state.inforPoster,
      stllImgArray: [],
    };
  },
  methods: {
    stllImgCheck(item) {
      this.stllImgArray = item.split('|');
    },
  },
};
</script>

<style></style>
