<template>
    <div class="col-3"
         @click="showComponent"
         v-bind:class="{ pink: isClicked }">
        <img class="menu-icon d-flex flex-column"
             :alt="menuItem.imageName"
             :src="'/src/components/menu/assets/' + menuItem.imageName">
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
        height: 40px;
        display: inline-block;
        margin: 3px auto 0 auto;
    }
    .description-text {
        color: white;
        font-size: .7em;
    }
    .pink {
        filter: sepia(100%) contrast(10%) saturate(10000%) hue-rotate(245deg);
    }
</style>
