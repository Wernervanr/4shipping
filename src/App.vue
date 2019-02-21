<template>
  <div id="app">
    <app-map></app-map>

    <app-menu></app-menu>
  </div>
</template>

<script>
  import Map from './components/Map-component.vue'
  import Menu from './components/Menu-component.vue'

  export default {
    name: 'app',
    data () {
      return {

      }
    },
    components: {
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
  height: 100%;
}
</style>
