<template>
    <div id="info" class="info-list" v-bind:style="{ height: setHeight + '%'}">
        <div class="button-holder col-12">
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
            let infoList = document.getElementById('info');
            infoList.addEventListener('touchmove', this.startTouchHandler);
            infoList.addEventListener('touchend', this.endTouchHandler);
        },
        methods: {
            startTouchHandler () {
                let fullScreen = screen.height;
                let currentCursorLocation = event.targetTouches[0].clientY;
                let actualHeight = fullScreen - currentCursorLocation;
                let actualHeightInPercentage = (actualHeight / fullScreen) * 103;

                this.setHeight = actualHeightInPercentage;
            },
            endTouchHandler () {
                if (this.setHeight >= 0 && this.setHeight < 15) {
                    this.setHeight = 1;
                } else if (this.setHeight >= 15 && this.setHeight < 40) {
                    this.setHeight = 30;
                } else if (this.setHeight >= 40 && this.setHeight < 65) {
                    this.setHeight = 55;
                } else if (this.setHeight >= 65 && this.setHeight <= 80) {
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
