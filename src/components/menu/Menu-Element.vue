<template>
    <div class="col-3 mr-auto ml-auto mt-auto mb-auto" v-bind:class="{ pink: isClicked }">
        <div class="d-flex flex-column">
            <img @click="showComponent"
                 class="menu-icon pt-1 pb-1 ml-auto mr-auto"
                 alt=" "
                 :src="'/src/components/menu/assets/' + menuItem.imageName">
        </div>
        <span class="description-text">{{ menuItem.menuText }}</span>
    </div>
</template>

<script>
    import { eventBus } from '../../main.js';
    export default {
        data () {
            return {
                isClicked: false,
            }
        },
        props: {
            menuItem: Object,
        },
        methods: {
            showComponent () {
                eventBus.changeComponent(this.menuItem.componentName);
                this.isClicked = true;
            },
        },
        created() {
            eventBus.$on('componentHasChanged', (activeComponent) => {
                if (activeComponent !== this.menuItem.componentName) {
                    this.isClicked = false;
                }
            });
        },
    }
</script>

<style>
    .menu-icon {
        width: auto;
        height: 55px;
        display: inline-block;
    }

    .description-text {
        color: white;
        font-size: .9em;
    }
    .pink {
        filter: sepia(100%) contrast(10%) saturate(10000%) hue-rotate(245deg);
    }
</style>
