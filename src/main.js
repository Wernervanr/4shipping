import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'YOUR API KEY',
    libraries: 'places', // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})
