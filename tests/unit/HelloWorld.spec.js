import { shallowMount, createLocalVue } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import en from '@/i18n/strings/translations.json'
import ar from '@/i18n/strings/translations-ar.json'
import Vuex from 'vuex'
import VuexI18n from 'vuex-i18n/dist/vuex-i18n.umd.js'
const localVue = createLocalVue()

localVue.use(Vuex)

describe('HelloWorld.vue', () => {
  const store = new Vuex.Store()
  localVue.use(VuexI18n.plugin, store)
  localVue.i18n.add('en', en)
  localVue.i18n.add('ar', ar)
  localVue.i18n.set('en')
  const wrapper = shallowMount(HelloWorld, { store, localVue })

  it('renders correct plugin header', () => {
    const expectedValue = 'Installed CLI Plugins'
    const actualValue = wrapper.find('#plugins-header').text()
    expect(actualValue).toBe(expectedValue)
  })
  it('renders correct plugin header in ar locale', () => {
    localVue.i18n.set('ar')
    const expectedValue = 'Installed CLI Pluginsمرحبا'
    const actualValue = wrapper.find('#plugins-header').text()
    expect(actualValue).toBe(expectedValue)
  })
})
