import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMovie } from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: [],
    value: '',
  },
  mutations: {
    SET_MOVIE(state, data) {
      state.movie = data;
    },
    SET_VALUE(state, data) {
      state.value = data;
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
