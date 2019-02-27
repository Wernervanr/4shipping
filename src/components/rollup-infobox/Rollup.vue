<template>
    <div class="component-holder clearfix" v-bind:style="{ height: setHeight}">
        <div class="button-holder">
            <button v-touch:moving="startHandler" v-touch:end="endHandler" class="resize-button"></button>
        </div>
        <component :is="activeComponent"></component>
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
                setHeight: '18px',
                activeComponent: String
            }
        },
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
            startHandler () {
                let fullScreen = document.body.clientHeight;
                let currentMouseLocation = event.targetTouches[0].clientY;
                console.log(fullScreen);
                console.log(currentMouseLocation);
            },
            endHandler () {
                console.log('doei');
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
            increaseOneLevel () {
                this.setHeight = '23%';
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
                if (this.setHeight === '18px') {
                    this.increaseOneLevel();
                }
            });
        },
    }
</script>

<style>
    .component-holder {
        z-index: 2;
        position: absolute;
        bottom: 78px;
        background: white;
        width: 100%;
        transition-duration: 750ms;
        border-top: solid 1px #F0F0F0;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
        box-shadow: -1px -9px 15px -4px rgba(152,152,152,0.6);
    }
    .button-holder {
        border: none;
        font-size: .7em;
    }
    .clearfix {
        overflow: scroll;
    }
    .resize-button {
        background-color: #E8E8E8;
        width: 130px;
        height: 6px;
        position: relative;
        top: -4px;
        margin-bottom: 0;
        border-radius: 2px;
    }
</style>
