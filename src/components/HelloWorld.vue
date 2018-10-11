<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      {{ $t('guide text') }}<br>
      {{ $t('guide next line') }}
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">{{ $t('vue docs text') }}</a>.
    </p>
    <h3 id="plugins-header">{{ $t('cli plugins text') }}</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">{{ $t('babel text') }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">{{ $t('eslint text') }}</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest" target="_blank" rel="noopener">{{ $t('jest text') }}</a></li>
    </ul>
    <h3>{{ $t('links text') }}</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">{{ $t('docs text') }}</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">{{ $t('forum text') }}</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">{{ $t('chat text') }}</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">{{ $t('twitter text') }}</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">{{ $t('news text') }}</a></li>
    </ul>
    <h3>{{ $t('ecosystem text') }}</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">{{ $t('router text') }}</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">{{ $t('vuex text') }}</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">{{ $t('devtools text') }}</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">{{ $t('loader text') }}</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">{{ $t('awesome vue text') }}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
