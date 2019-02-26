<template>
    <div id="app">
        <app-map></app-map>
        <app-rollup></app-rollup>
        <app-menu></app-menu>
    </div>
</template>

<script>
    import Map from './components/map/Map.vue'
    import Menu from './components/menu/Menu.vue'
    import Rollup from './components/rollup-infobox/Rollup.vue'

    export default {
        name: 'app',
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
