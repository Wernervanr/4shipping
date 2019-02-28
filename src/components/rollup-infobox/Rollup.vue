<template>
    <div class="info-list" v-bind:style="{ height: setHeight + '%'}">
        <div class="button-holder col-12"
             v-touch:moving="startHandler">
            <button class="resize-button"></button>
        </div>
        <div class="component-holder mr-1 ml-1">
            <component :is="activeComponent"></component>
        </div>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    import KaartInfo from './kaart/Kaart.vue'
    import VrachtInfo from './vracht-info/Vracht-Info.vue'
    import TransportInfo from './transport-info/Transport-Info.vue'
    import MeerInfo from './meer-info/Meer-Info.vue'

    export default {
        data () {
            return {
                setHeight: '',
                activeComponent: String
            }
        },
        methods: {
            startHandler () {
                let fullScreen = screen.height;
                let currentMouseLocation = event.targetTouches[0].clientY;

                let newHeight = fullScreen - currentMouseLocation;

                let newHeightTest = (newHeight / fullScreen) * 100;
                this.setHeight = newHeightTest;
            },
            increaseOneLevel () {
                this.setHeight = '20';
            },
        },
        components: {
            appKaartInfo: KaartInfo,
            appVrachtInfo: VrachtInfo,
            appTransportInfo: TransportInfo,
            appMeerInfo: MeerInfo,
        },
        created() {
            eventBus.$on('componentHasChanged', (activeComponent) => {
                this.activeComponent = activeComponent;
                if (this.setHeight < 20) {
                    this.increaseOneLevel();
                }
            });
        },
    }
</script>

<style>
    .info-list {
        z-index: 1;
        position: absolute;
        bottom: 0;
        background: white;
        width: 100%;
        min-height: 90px;
        max-height: 80%;
        border-top: solid 1px #F0F0F0;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        box-shadow: -1px -9px 15px -4px rgba(152,152,152,0.6);
        overflow: hidden;
    }
    .button-holder {
        border: none;
        font-size: .7em;
    }
    .resize-button {
        background-color: #E8E8E8;
        width: 130px;
        height: 6px;
        border-radius: 2px;
    }
    .component-holder {
        position: absolute;
        height: 100%;
        width: 100%;
        overflow: scroll;
    }
</style>
