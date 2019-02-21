<template>
  <div id="app">
    <app-map></app-map>
    <component :is="activeComponent"></component>
    <app-menu v-on:item-activated="changeActiveComponent"></app-menu>
  </div>
</template>

<script>
  import Map from './components/Map-component.vue'
  import Menu from './components/Menu-component.vue'
  import KaartInfo from './components/Menu-component.vue'
  import VrachtInfo from './components/Menu-component.vue'
  import TransportInfo from './components/Menu-component.vue'
  import MeerInfo from './components/Menu-component.vue'

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
        console.log(this.activeComponent);
      },
    },
    components: {
      appKaartInfo: KaartInfo,
      appVrachtInfo: VrachtInfo,
      appTransportInfo: TransportInfo,
      appMeerInfo: MeerInfo,
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
