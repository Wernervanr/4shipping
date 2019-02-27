import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyB3ynuqJl-pCI54a6vatgygSFDGsrGCAqk',
    libraries: 'places'
  },
});

Vue.use(Vue2TouchEvents);

export const eventBus = new Vue({
  methods: {
    changeComponent(componentName) {
      this.$emit('componentHasChanged', componentName);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});
