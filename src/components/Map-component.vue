<template>
    <div class="maps-container">
        <search-bar v-on:location-changed="changeLocation"></search-bar>
        <GmapMap
                :center="coordinates"
                :zoom="10"
                :options="{
                    zoomControlOptions: {
                        position: 3
                    },
                    streetViewControl: false
                }"
                map-type-id="terrain"
                style="width: 100vw; height: 95vh"
                class="map-position">
        </GmapMap>
    </div>
</template>

<script>
    import Searchbar from './Searchbar-component.vue'
    export default {
        data() {
            return {
                coordinates: {
                    lat: 52.26,
                    lng: 6.7092
                }
            }
        },
        methods: {
            changeLocation (event) {
                this.coordinates.lat = event.lat;
                this.coordinates.lng = event.lng;
            },
        },
        components: {
            searchBar: Searchbar,
        },
    }
</script>

<style>
    .maps-container {
        position: relative;
    }
    .map-position {
        position: absolute;
        bottom: 20%;
        left: 0;
    }
</style>
