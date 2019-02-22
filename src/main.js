import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB3ynuqJl-pCI54a6vatgygSFDGsrGCAqk',
    libraries: 'places', // This is required if you use the Autocomplete plugin
  },
});

new Vue({
  el: '#app',
  render: h => h(App)
});
