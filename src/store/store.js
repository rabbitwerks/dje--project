/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable max-len */

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Localhost Backend
const LOCAL_BACKEND_URL = 'http://localhost:1337';

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
        // {
        //   id: 0,
        //   title: 'Keepers Of The Labyrinth #06',
        //   embeds: {
        //     desktop: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/602602950&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        //     mobile: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/602602950&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        //   },
        //   description: 'Join the Keepers of the Labyrinth every Sunday on Impulse Radio from 2100(CH) / 2200(SA) on a journey deep into the darker reaches of Contemporary Techno.',
        // },
        // {
        //   id: 1,
        //   title: 'Techno Tuesday at Amsterdam Bar & Hall (LIVE) 2-19-19',
        //   embeds: {
        //     desktop: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578796651&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        //     mobile: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/578796651&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        //   },
        //   description: 'Set recorded from Techno Tuesday at Amsterdam Bar & Hall in Saint Paul, MN on February 19, 2019. Direct Support for Centrific. I went a little deeper into mixing with three decks with this set.',
        // },
        // {
        //   id: 2,
        //   title: 'BLCK Mass (live) at The Exchange in Minneapolis, MN 10-21-18',
        //   embeds: {
        //     desktop: '<iframe width="100%" height="166" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522448692&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe>',
        //     mobile: '<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/522448692&color=%23181818&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>',
        //   },
        //   description: 'My first time playing the BLCK Mass stage, plus my first time playing at The Exchange. I experimented with track selection for this in an attempt to reach beyond my typical style of playing Techno.',
        // },
      ],
      info: 'These are just a few of the best. My entire collection of mixes is available to stream on SoundCloud.',
      lastUpdated: '06/05/19',
    },
    biographyData: {
      text: 'DJ Encounter, aka Brady Hill of Minneapolis, first started mixing records in the year 2000, after finding inspiration at a party put on by the legendary Midwest crew Drop Bass Network. The rave scene quickly left its mark on Hill; though techno music has always been his main passion, he listens to and plays house, drum and bass, dubstep, trance and more, and as such he lists genre-spanning DJs such as Frankie Bones, Adam X, Dieselboy, DJ Dara, and DJ ESP as influences. \n\nAfter taking gigs for the first several years of his career, personal issues led Hill to decide to keep his DJ skills out of public view, but he never stopped listening, practicing, mixing, and playing, as well as integrating new technology into his sets. He could only keep it to himself for so long, though. In 2015, Hill got the itch to perform in front of others again; that’s exactly what he did and he hasn’t looked back since. \n\nThese days you can find DJ Encounter performing at various clubs and underground events around the Twin Cities, most notably with the Blend Session and Dance Church crews. He earned his place at two of his biggest gigs, as he won two different mix contests to play opening sets at Heartbreak Hotel 4 and a huge SIMshows event at Skyway Theater, respectively.',
      bookingContact: 'For booking inquires you can get in contact with Brady via',
      lastUpdated: '06/10/19',
    },
    admin: {
      user: {
        // empty for production build
        _id: '11111',
        name: 'rw',
        email: 'test@test.com',
        username: 'rwjs',
        isLoggedIn: true,
      },
      activeController: 'SocialsController',
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
    contactSelect_GET: state => state.globals.contactSelect,
    contactData_GET: state => state.globals.socials[state.globals.contactSelect],
    mixesData_GET: state => state.mixesData,
    bioData_GET: state => state.biographyData,
    adminState_GET: state => state.admin,
    isLoggedIn_GET: state => state.admin.isLoggedIn,
  },
  mutations: {
    // CLIENT
    calcViewportDimensions_MUTA({ globals }, payload) {
      globals.viewport.width = payload.width;
      globals.viewport.height = payload.height;
    },

    initRequestRemoteData_MUTA(state, payload) {
      const { mixes, biography, socials } = payload;
      state.mixesData.mixes = mixes.docs;
      state.mixesData.biography = biography.docs;
      state.mixesData.socials = socials.docs;
    },

    // ADMIN
    adminLoggedIn_MUTA({ admin }, payload) {
      const { _id, name, username } = payload;
      admin.user.isLoggedIn = true;
      admin.user._id = _id;
      admin.user.name = name;
      admin.user.username = username;
    },
    setActiveController_MUTA({ admin }, payload) {
      admin.activeController = payload;
    },

    // MIXES
    saveMixEdits_MUTA(state, payload) {
      // const { id, edits } = payload;
      // const mixData = Object.entries(state.mixesData.mixes[id]);

      // const mixTitle = mixData[1][1];
      // const mixEmbeds = mixData[2][1];
      // const mixDescription = mixData[3][1];
      // if (mixTitle !== edits.title) {
      //   if (edits.title) {
      //     state.mixesData.mixes[id].title = edits.title;
      //   }
      // }
      // if (mixEmbeds.desktop !== edits.embeds.desktop) {
      //   if (edits.embeds.desktop) {
      //     state.mixesData.mixes[id].embeds.desktop = edits.embeds.desktop;
      //   }
      // }
      // if (mixEmbeds.mobile !== edits.embeds.mobile) {
      //   if (edits.embeds.mobile) {
      //     state.mixesData.mixes[id].embeds.mobile = edits.embeds.mobile;
      //   }
      // }
      // if (mixDescription !== edits.description) {
      //   if (edits.description) {
      //     state.mixesData.mixes[id].description = edits.description;
      //   }
      // }
    },
    deleteMix_MUTA(state, id) {
      state.mixesData.mixes.splice(id, 1);
    },
    addNewMix_MUTA(state, payload) {
      state.mixesData.mixes.push(payload);
    },

    // BIOGRAPHY
    saveBiographyEdits_MUTA(state, edits) {
      state.biographyData.text = edits.biographyEdits;
      state.biographyData.lastUpdated = Date.now().toLocaleString();
    },

    // SOCIALS
    updateSiteName_MUTA(state, payload) {
      const { index, name } = payload;
      state.globals.socials[index].name = name;
    },
    updateSiteURL_MUTA(state, payload) {
      const { index, link } = payload;
      state.globals.socials[index].link = link;
    },
    saveNewSocial_MUTA(state, payload) {
      state.globals.socials.push({
        name: payload.siteName,
        link: payload.siteURL,
      });
    },
    deleteSocialItem_MUTA(state, index) {
      state.globals.socials.splice(index, 1);
    },
  },
  actions: {
    // CLIENT
    calcViewportDimensions_ACTION({ commit }, payload) {
      commit('calcViewportDimensions_MUTA', payload);
    },

    async initRequestRemoteData_ACTION({ commit }) {
      // fetch mixes
      const mixesResponse = await fetch(`${LOCAL_BACKEND_URL}/api/v1/mixes`);
      const mixes = await mixesResponse.json();

      // fetch bio
      const bioResponse = await fetch(`${LOCAL_BACKEND_URL}/api/v1/biography`);
      const biography = await bioResponse.json();

      // fetch socials
      const socialsResponse = await fetch(`${LOCAL_BACKEND_URL}/api/v1/socials`);
      const socials = await socialsResponse.json();

      // payload
      const payload = {
        mixes,
        biography,
        socials,
      };
      // muta save to state
      commit('initRequestRemoteData_MUTA', payload);
    },

    // ADMIN
    adminLoggedIn_ACTION({ commit }, payload) {
      commit('adminLoggedIn_MUTA', payload);
    },
    setActiveController_ACTION({ commit }, payload) {
      commit('setActiveController_MUTA', payload);
    },

    // MIXES
    saveMixEdits_ACTION({ state, commit }, payload) {
      // to be sent to DB
      const initialRemotePayload = {
        title: '',
        embeds: {
          desktop: '',
          mobile: '',
        },
        description: '',
      };
      const { _id, edits } = payload;

      const index = state.mixesData.mixes.map(mix => mix._id).indexOf(_id);
      const mixData = Object.entries(state.mixesData.mixes[index]);

      const mixTitle = mixData[1][1];
      const mixEmbeds = mixData[2][1];
      const mixDescription = mixData[3][1];

      if (edits.title
          && edits.title !== mixTitle) {
        initialRemotePayload.title = edits.title;
      }

      if (edits.embeds.desktop
          && edits.embeds.desktop !== mixEmbeds.desktop) {
        initialRemotePayload.embeds.desktop = edits.embeds.desktop;
      }

      if (edits.embeds.mobile
          && edits.embeds.mobile !== mixEmbeds.mobile) {
        initialRemotePayload.embeds.mobile = edits.embeds.mobile;
      }

      if (edits.description
          && edits.description !== mixDescription) {
        initialRemotePayload.description = edits.description;
      }

      // remote payload fallback values from vuex store if not provided from edits
      const validatedRemotePayload = {
        title: initialRemotePayload.title || mixTitle,
        embeds: {
          desktop: initialRemotePayload.embeds.desktop || mixEmbeds.desktop,
          mobile: initialRemotePayload.embeds.desktop || mixEmbeds.mobile,
        },
        description: initialRemotePayload.description || mixDescription,
      };

      fetch(`${LOCAL_BACKEND_URL}/api/v1/mixes/${_id}/update`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          token: localStorage.token,
        },
        body: JSON.stringify(validatedRemotePayload),
      }).then(response => response.json())
        .then(data => console.log(data));

      commit('saveMixEdits_MUTA', payload);
    },
    deleteMix_ACTION({ commit }, id) {
      commit('deleteMix_MUTA', id);
    },
    addNewMix_ACTION({ commit }, payload) {
      commit('addNewMix_MUTA', payload);
    },

    // BIOGRAPHY
    saveBiographyEdits_ACTION({ state, commit }, edits) {
      // send updates to backend then DB [POST]
      if (state.admin.user.isLoggedIn) {
        fetch(`${LOCAL_BACKEND_URL}/api/biography`, {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            token: localStorage.token,
          },
          body: JSON.stringify(edits),
        })
          .then(response => response.json())
          .then(resolve => console.log(resolve))
          .catch(error => console.log(error));
        // retrieve updated data, save in store [GET]
        commit('saveBiographyEdits_MUTA', edits);
      }
    },

    // SOCIALS
    updateSiteName_ACTION({ commit }, payload) {
      commit('updateSiteName_MUTA', payload);
    },
    updateSiteURL_ACTION({ commit }, payload) {
      commit('updateSiteURL_MUTA', payload);
    },
    saveNewSocial_ACTION({ commit }, payload) {
      commit('saveNewSocial_MUTA', payload);
    },
    deleteSocialItem_ACTION({ commit }, index) {
      commit('deleteSocialItem_MUTA', index);
    },
  },
});
