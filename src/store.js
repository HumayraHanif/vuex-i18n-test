import Vue from 'vue'
import Vuex from 'vuex'
import {setLanguage, getLanguages} from './i18n'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    language: ''
  },
  mutations: {
    'change_language': (state, language) => {
      state.language = language
    }
  },
  actions: {
    setTranslationLanguage: ({ commit, state }, lang) => {
      commit('change_language', lang)
      setLanguage(lang)
    }
  },
  getters: {
    languages: () => {
      const result = getLanguages()
      return result
    }
  }
})
