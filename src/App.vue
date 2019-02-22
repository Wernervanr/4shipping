<template>
  <div id="app">
    <app-map></app-map>
    <app-rollup :activeComponent="activeComponent"></app-rollup>
    <app-menu v-on:item-activated="changeActiveComponent"></app-menu>
  </div>
</template>

<script>
  import Map from './components/Map-component.vue'
  import Menu from './components/Menu-component.vue'
  import Rollup from './components/Rollup-component.vue'

  export default {
    name: 'app',
    data () {
      return {
        activeComponent: '',
      }
    },
    methods : {
      changeActiveComponent (event) {
        this.activeComponent = event;
      },
    },
    components: {
      appRollup: Rollup,
      appMap: Map,
      appMenu: Menu
    },
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}
</style>
