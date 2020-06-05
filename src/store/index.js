import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMovie } from '../api/index';
import { getTypeFromCookie, getValueFromCookie } from '../utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: [],
    value: getValueFromCookie() || '',
    count: '',
    type: getTypeFromCookie() || '',
    inforTitle: '',
    inforPoster: '',
    inforMovie: [],
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
    SET_INFORTITLE(state, data) {
      state.inforTitle = data;
    },
    SET_INFORPOSTER(state, data) {
      state.inforPoster = data;
    },
    SET_INFORMOVIE(state, data) {
      state.inforMovie = data;
    },
    ClearMovie(state) {
      (state.value = ''), (state.type = '');
    },
  },
  actions: {
    FECH_MOVIE(context, value) {
      return fetchMovie(value).then(res => {
        context.commit('SET_MOVIE', res.data);
        return res;
      });
    },
  },
  modules: {},
});
