<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">{{ $t('home text') }}</router-link> |
      <router-link to="/about">{{ $t('about text') }}</router-link>
    </div>
    <select v-model="selected" @change="languageChanged">
      <option disabled value="selected">{{ $t("select text") }}</option>
      <option v-for="language in languagesSuported" :value="language">{{language}}</option>
    </select>
    <router-view/>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data () {
    return {
      selected: ''
    }
  },
  computed: {
    languagesSuported() {
      return this.$store.getters.languages
    },
    msg() {
      return this.$i18n.translate("welcome text")
    }
  },
  methods: {
    ...mapActions([
      'setTranslationLanguage', // map `this.increment()` to `this.$store.dispatch('increment')`
    ]),
    languageChanged() {
      const lang = this.selected
      this.setTranslationLanguage(lang)
    }
  },
  mounted() {
    this.selected = this.$i18n.locale()
    languageChanged()
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
