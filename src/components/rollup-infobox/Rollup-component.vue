<template>
    <div class="component-holder clearfix" v-bind:style="{ height: setHeight}">
        <div class="button-holder">
            <button class="btn-secondary mr-1"
                    @click="increaseComponentSize">&#8679
            </button>
            <button class="btn-secondary"
                    @click="decreaseComponentSize">&#8681
            </button>
        </div>
        <component :is="activeComponent"></component>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    import KaartInfo from './kaart/Kaart-Info.vue'
    import VrachtInfo from './vracht-info/Vracht-Info.vue'
    import TransportInfo from './transport-info/Transport-Info.vue'
    import MeerInfo from './meer-info/Meer-Info.vue'

    export default {
        data () {
            return {
                setHeight: '33px',
                activeComponent: ''
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
                if (this.setHeight === '33px') {
                    this.increaseOneLevel();
                }
            });
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
        z-index: 2;
        position: absolute;
        bottom: 78px;
        background: white;
        width: 100%;
        transition-duration: 750ms;
        border-top: solid 1px #F0F0F0;
        border-top-left-radius: 12px;
        border-top-right-radius: 12px;
    }
    .button-holder {
        border: none;
        font-size: .7em;
    }
    .clearfix {
        overflow: scroll;
    }
</style>
