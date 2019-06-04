/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    globals: {
      viewport: {
        width: 0,
        height: 0,
      },
    },
    mixes: [
      {
        id: 0,
        embed: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/602602950&color=%231d0d0c&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        description: 'Join the Keepers of the Labyrinth every Sunday on Impulse Radio from 2100(CH) / 2200(SA) on a journey deep into the darker reaches of Contemporary Techno.',
      },
      {
        id: 1,
        embed: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578796651&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        description: 'Set recorded from Techno Tuesday at Amsterdam Bar & Hall in Saint Paul, MN on February 19, 2019. Direct Support for Centrific. I went a little deeper into mixing with three decks with this set.',
      },
      {
        id: 2,
        embed: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522448692&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        description: 'My first time playing the BLCK Mass stage, plus my first time playing at The Exchange. I experimented with track selection for this in an attempt to reach beyond my typical style of playing Techno.',
      },
    ],
  },
  getters: {
    viewportDimensions_GET: state => state.globals.viewport,
    allMixes: state => state.mixes,
  },
  mutations: {
    calcViewportDimensions_MUTA({ globals }, payload) {
      globals.viewport.width = payload.width;
      globals.viewport.height = payload.height;
    },
  },
  actions: {
    calcViewportDimensions_ACTION({ commit }, payload) {
      commit('calcViewportDimensions_MUTA', payload);
    },
  },
});
