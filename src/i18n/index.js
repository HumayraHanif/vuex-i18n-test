import Vue from 'vue'
import VuexI18n from 'vuex-i18n'
const en = require('./strings/translations.json')
const ar = require('./strings/translations-ar.json')

export const setLanguage = (lang) => {
    Vue.i18n.set(lang)
    console.log(lang)
}

export const getLanguages = () => {
  const result = Vue.i18n.locales()
  console.log(result)
  return result
}

export const loadLanguages = (store) => {
  Vue.use(VuexI18n.plugin, store)
  Vue.i18n.add('en', en)
  Vue.i18n.fallback('en')
  Vue.i18n.set('en') // use english as default
  Vue.i18n.add('ar', ar) // add arabic
}

export default {
  loadLanguages,
  setLanguage,
  getLanguages
}
