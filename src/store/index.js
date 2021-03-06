import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMovie, fetchSimilarMovie, fetchHeartMovie } from '../api/index';
import {
  getTypeFromCookie,
  getValueFromCookie,
  getMovieIdFromCookie,
  getMovieSeqFromCookie,
  getSimilarKeywordFromCookie,
  getHeartMIFromCookie,
  getHeartMSFromCookie,
} from '../utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: [],
    value: getValueFromCookie() || '',
    count: '',
    type: getTypeFromCookie() || '',
    inforMovie: [],
    movieId: getMovieIdFromCookie() || '',
    movieSeq: getMovieSeqFromCookie() || '',
    similarKeyword: getSimilarKeywordFromCookie() || '',
    heartMovie: [],
    heartMovieId: getHeartMIFromCookie(),
    heartMovieSeq: getHeartMSFromCookie(),
  },
  mutations: {
    SET_MOVIE(state, data) {
      state.movie = data.Data[0].Result;
      state.count = data.Data[0].Count;
    },
    SET_VALUE(state, data) {
      state.value = data;
    },
    SET_TYPE(state, data) {
      state.type = data;
    },
    SET_INFORMOVIE(state, data) {
      state.inforMovie = data;
      state.movieId = data.movieId;
      state.movieSeq = data.movieSeq;
    },
    SET_SIMILARKEYWORD(state, data) {
      state.similarKeyword = data;
    },
    SET_HEART(state, data) {
      state.heartMovie = data;
      state.heartMovieId = data.movieId;
      state.heartMovieSeq = data.movieSeq;
    },
    ClearMovie(state) {
      (state.value = ''),
        (state.type = ''),
        (state.movie = []),
        (state.count = '');
    },
    ClearInforMovie(state) {
      (state.movieId = ''), (state.movieSeq = ''), (state.inforMovie = []);
    },
  },
  actions: {
    FECH_MOVIE(context, value) {
      return fetchMovie(value).then(res => {
        context.commit('SET_MOVIE', res.data);
        return res;
      });
    },
    FECH_INFORMOVIE(context, value) {
      return fetchMovie(value).then(res => {
        context.commit('SET_INFORMOVIE', res.data.Data[0].Result[0]);
        return res;
      });
    },
    FECH_SIMILARMOVIE(context, value) {
      return fetchSimilarMovie(value).then(res => {
        context.commit('SET_MOVIE', res.data);
        return res;
      });
    },
    FECH_HEARTMOVIE(context, value) {
      return fetchHeartMovie(value).then(res => {
        context.commit('SET_HEART', res.data);
        return res;
      });
    },
  },
  modules: {},
});
