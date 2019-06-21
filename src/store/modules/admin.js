/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */

const state = {
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
};

const getters = {
  adminState_GET: state => state.admin,
};

const mutations = {
  setActiveController_MUTA({ admin }, payload) {
    admin.activeController = payload;
  },
};

const actions = {
  setActiveController_ACTION({ commit }, payload) {
    commit('setActiveController_MUTA', payload);
  },
  saveEdits_ACTION({ commit }, id) {
    commit('saveEdits_MUTA', id)
  }
};

export default {
  state,
  getters,
  mutations,
  actions,
};
