<template>
    <div class="component-holder" v-bind:style="{ height: setHeight + 'px'}">
        <div v-on:mousedown="adjustComponentSize" v-on:mouseup="stopAdjusting">
            <button class="component-button"></button>
        </div>
        <br>
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
                adjustingHeight: false
            }
        },
        props: [
            'activeComponent',
        ],
        methods: {
            adjustComponentSize () {
                this.adjustingHeight = true;
                document.onmousemove = (MouseEvent) => {
                    if (this.adjustingHeight) {
                        let y = MouseEvent.y;
                        let x = document.body.scrollHeight;
                        let newHeight = x - y;
                        this.setHeight = newHeight -30;
                    }
                };
            },
            stopAdjusting () {
                this.adjustingHeight = false;
            }
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
        z-index: 5;
        position: absolute;
        bottom: 97px;
        background: white;
        width: 100%;
        max-height: 700px;
        min-height: 30px;
    }

    .component-button {
        height: 6px;
        width: 60px;
        background: lightgrey;
        margin-bottom: 10px;
        border: none;
    }
</style>
