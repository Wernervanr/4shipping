<template>
    <div class="info-list" v-bind:style="{ height: setHeight + '%'}">
        <div id="button-holder" class="pt-2 pb-2 col-12">
            <div class="resize-button"></div>
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
                setHeight: 0,
                activeComponent: String,
            }
        },
        created() {
            eventBus.$on('componentHasChanged', (activeComponent) => {
                this.activeComponent = activeComponent;
                if (this.setHeight < 30) {
                    this.setHeight = 30;
                }
            });
        },
        mounted() {
            let adjustHeightButton = document.getElementById('button-holder');
            adjustHeightButton.addEventListener('touchmove', this.startTouchHandler);
            adjustHeightButton.addEventListener('touchend', this.endTouchHandler);
        },
        methods: {
            startTouchHandler () {
                let fullScreen = screen.height;
                let currentCursorLocation = event.targetTouches[0].clientY;
                let actualHeight = fullScreen - currentCursorLocation;
                let actualHeightInPercentage = (actualHeight / fullScreen) * 100;

                this.setHeight = actualHeightInPercentage;
            },
            endTouchHandler () {
                if (this.setHeight >= 0 && this.setHeight < 15) {
                    this.setHeight = 1;
                } else if (this.setHeight >= 15 && this.setHeight < 45) {
                    this.setHeight = 30;
                } else if (this.setHeight >= 45 && this.setHeight < 70) {
                    this.setHeight = 55;
                } else if (this.setHeight >= 70 && this.setHeight <= 80) {
                    this.setHeight = 80;
                }
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
    .info-list {
        z-index: 1;
        position: absolute;
        bottom: 0;
        background: white;
        width: 100%;
        min-height: 89px;
        max-height: 80%;
        border-top: solid 1px #F0F0F0;
        border-radius: 12px 12px 0 0;
        box-shadow: -1px -9px 15px -4px rgba(152,152,152,0.6);
        overflow: hidden;
    }
    .resize-button {
        background-color: #E8E8E8;
        width: 15%;
        height: 5px;
        border-radius: 2px;
        margin: 0 auto 0 auto;
    }
    .component-holder {
        position: absolute;
        height: 100%;
        width: 100%;
        padding-bottom: 90px;
        overflow: scroll;
    }
</style>
