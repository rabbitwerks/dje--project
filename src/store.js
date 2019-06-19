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
      socials: [
        {
          name: 'soundcloud',
          link: 'https://soundcloud.com/dj-encounter',
        },
        {
          name: 'facebook',
          link: 'https://www.facebook.com/pages/a/270869899628854',
        },
        {
          name: 'instagram',
          link: 'https://instagram.com/dj_encounter_mn',
        },
        {
          name: 'email',
          link: 'mailto:djencounter1200@gmail.com',
        },
      ],
      contactSelect: 1,
    },
    mixesData: {
      mixes: [
        {
          id: 0,
          title: 'Keepers Of The Labyrinth #06',
          embeds: {
            desktop: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578796651&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
            mobile: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/616801515&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
          },
          description: 'Join the Keepers of the Labyrinth every Sunday on Impulse Radio from 2100(CH) / 2200(SA) on a journey deep into the darker reaches of Contemporary Techno.',
        },
        {
          id: 1,
          title: 'Techno Tuesday at Amsterdam Bar & Hall (LIVE) 2-19-19',
          embeds: {
            desktop: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578796651&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
            mobile: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578796651&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
          },
          description: 'Set recorded from Techno Tuesday at Amsterdam Bar & Hall in Saint Paul, MN on February 19, 2019. Direct Support for Centrific. I went a little deeper into mixing with three decks with this set.',
        },
        {
          id: 2,
          title: 'BLCK Mass (live) at The Exchange in Minneapolis, MN 10-21-18',
          embeds: {
            desktop: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522448692&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
            mobile: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522448692&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
          },
          description: 'My first time playing the BLCK Mass stage, plus my first time playing at The Exchange. I experimented with track selection for this in an attempt to reach beyond my typical style of playing Techno.',
        },
      ],
      info: 'These are just a few of the best. My entire collection of mixes is available to stream on SoundCloud.',
      lastUpdated: '06/05/19',
    },
    biographyData: {
      text: 'DJ Encounter, aka Brady Hill of Minneapolis, first started mixing records in the year 2000, after finding inspiration at a party put on by the legendary Midwest crew Drop Bass Network. The rave scene quickly left its mark on Hill; though techno music has always been his main passion, he listens to and plays house, drum and bass, dubstep, trance and more, and as such he lists genre-spanning DJs such as Frankie Bones, Adam X, Dieselboy, DJ Dara, and DJ ESP as influences. <br /><br /> After taking gigs for the first several years of his career, personal issues led Hill to decide to keep his DJ skills out of public view, but he never stopped listening, practicing, mixing, and playing, as well as integrating new technology into his sets. He could only keep it to himself for so long, though. In 2015, Hill got the itch to perform in front of others again; that’s exactly what he did and he hasn’t looked back since. <br /><br /> These days you can find DJ Encounter performing at various clubs and underground events around the Twin Cities, most notably with the Blend Session and Dance Church crews. He earned his place at two of his biggest gigs, as he won two different mix contests to play opening sets at Heartbreak Hotel 4 and a huge SIMshows event at Skyway Theater, respectively. For booking inquiries you can get in contact with him via ',
      lastUpdated: '06/10/19',
    },
    admin: {
      isLoggedIn: false,
      activeController: 'MixesController',
      controllerMenu: [
        {
          title: 'Mixes',
          controller: 'MixesController',
        },
        {
          title: 'Biography',
          controller: 'BiographyController',
        },
        {
          title: 'Socials',
          controller: 'SocialsController',
        },
      ],
    },
  },
  getters: {
    viewportDimensions_GET: state => state.globals.viewport,
    socials_GET: state => state.globals.socials,
    contactSelect_GET: state => state.contactSelect,
    contactLink_GET: state => state.globals.socials[state.globals.contactSelect],
    mixesData_GET: state => state.mixesData,
    singleMix_VMOD: state => id => state.mixesData.mixes[id],
    bioData_GET: state => state.biographyData,
    adminState_GET: state => state.admin,
  },
  mutations: {
    calcViewportDimensions_MUTA({ globals }, payload) {
      globals.viewport.width = payload.width;
      globals.viewport.height = payload.height;
    },
    setActiveController_MUTA({ admin }, payload) {
      admin.activeController = payload;
    },
  },
  actions: {
    calcViewportDimensions_ACTION({ commit }, payload) {
      commit('calcViewportDimensions_MUTA', payload);
    },
    setActiveController_ACTION({ commit }, payload) {
      commit('setActiveController_MUTA', payload);
    },
  },
});
