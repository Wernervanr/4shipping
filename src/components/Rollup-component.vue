<template>
    <div class="component-holder" v-bind:style="{ height: setHeight}">
        <div class="button-holder">
            <button class="btn-light" v-on:click="increaseComponentSize">&#8679</button>
            <button class="btn-light" v-on:click="decreaseComponentSize">&#8681</button>
        </div>
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
                setHeight: '33px',
            }
        },
        props: [
            'activeComponent',
        ],
        methods: {
            increaseComponentSize () {
                if(this.setHeight === '33px'){
                    this.setHeight = '20%';
                } else if (this.setHeight === '20%') {
                    this.setHeight = '50%';
                } else if (this.setHeight === '50%') {
                    this.setHeight = '80%';
                }
            },
            decreaseComponentSize () {
                if(this.setHeight === '80%'){
                    this.setHeight = '50%';
                } else if (this.setHeight === '50%') {
                    this.setHeight = '20%';
                } else if (this.setHeight === '20%') {
                    this.setHeight = '33px';
                }
            },
            setHeightToTwentyPercent () {
                this.setHeight = '20%';
            },
        },
        watch: {
            activeComponent: function() {
                if (this.activeComponent !== ''){
                    this.setHeightToTwentyPercent();
                }
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
    .btn-light {
        margin-top: 5px;
        margin-bottom: 4px;
        border-radius: 10%;
    }
    .component-holder {
        z-index: 5;
        position: absolute;
        bottom: 98px;
        background: white;
        width: 100%;
        transition-duration: 750ms;
    }
    .button-holder {
        border: none;
        font-size: .7em;
    }
</style>
