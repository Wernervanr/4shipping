<template>
    <div class="component-holder clearfix" v-bind:style="{ height: setHeight}">
        <div class="button-holder">
            <button class="btn-secondary mr-1" v-on:click="increaseComponentSize">&#8679</button>
            <button class="btn-secondary" v-on:click="decreaseComponentSize">&#8681</button>
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
                    this.setHeight = '23%';
                } else if (this.setHeight === '23%') {
                    this.setHeight = '50%';
                } else if (this.setHeight === '50%') {
                    this.setHeight = '75%';
                }
            },
            decreaseComponentSize () {
                if(this.setHeight === '75%'){
                    this.setHeight = '50%';
                } else if (this.setHeight === '50%') {
                    this.setHeight = '23%';
                } else if (this.setHeight === '23%') {
                    this.setHeight = '33px';
                }
            },
            setHeightToTwentyThreePercent () {
                this.setHeight = '23%';
            },
        },
        watch: {
            activeComponent: function() {
                if (this.activeComponent !== ''){
                    this.setHeightToTwentyThreePercent();
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
    .btn-secondary {
        margin-top: 5px;
        margin-bottom: 4px;
        border-radius: 10%;
        width: 50px;
        background: white;
        border-color: #16153D;
        color: black;
    }

    .btn-secondary:hover {
        background: #16153D;
    }
    .component-holder {
        z-index: 5;
        position: absolute;
        bottom: 78px;
        background: white;
        width: 100%;
        transition-duration: 750ms;
        border-top: solid 1px #F0F0F0;
    }
    .button-holder {
        border: none;
        font-size: .7em;
    }
    .clearfix {
        overflow: scroll;
    }
</style>
