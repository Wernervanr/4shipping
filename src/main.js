import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
import App from './App.vue'

Vue.use(VueGoogleMaps, {
  load: {
    key: '',
    libraries: 'places'
  },
});

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
