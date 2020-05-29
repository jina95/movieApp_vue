import Vue from 'vue';
import Vuex from 'vuex';
import { fetchMovie } from '../api/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movie: [],
    value: '',
    count: '',
    type: '',
    inforMovie:[],
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
    SET_INFORMOVIE(state, data){
      state.inforMovie = data
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
