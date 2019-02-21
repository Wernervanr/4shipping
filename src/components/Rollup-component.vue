<template>
    <div class="component-holder" v-bind:style="{ height: setHeight + 'px'}">
        <button v-on:mousemove="adjustComponentSize" class="component-button"></button>
        <component :is="activeComponent"></component>
    </div>
</template>

<script>
    import KaartInfo from './rollup-infobox/Kaart-info-component.vue'
    import VrachtInfo from './rollup-infobox/Vracht-info-component.vue'
    import TransportInfo from './rollup-infobox/Transport-info-component.vue'
    import MeerInfo from './rollup-infobox/Meer-info-component.vue'

    export default {
        data () {
            return {
                setHeight: 30,
            }
        },
        props: [
            'activeComponent',
        ],
        methods: {
            adjustComponentSize () {
                console.log(event);
            },
        },
        components: {
            appKaartInfo: KaartInfo,
            appVrachtInfo: VrachtInfo,
            appTransportInfo: TransportInfo,
            appMeerInfo: MeerInfo,
        },
    }
</script>

<style>
    .component-holder {
        z-index: 10;
        position: absolute;
        bottom: 97px;
        background: white;
        width: 100%;
    }

    .component-button {
        height: 5px;
        width: 60px;
        background: lightgrey;
        margin-bottom: 10px;
        border: none;
    }


</style>
