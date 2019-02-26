<template>
    <div class="col-2 pl-1">
        <div class="d-flex flex-column">
            <img class="icon pt-1 pb-1 ml-auto mr-auto"
                 alt=" "
                 :src="'/src/components/rollup-infobox/kaart/assets/' + contentItem.imageName"
                 @click="showComponent">
        </div>
        <span class="content-text">{{ contentItem.itemText }}</span>
    </div>
</template>

<script>
    import { eventBus } from '../../../main.js';
    export default {
        props: {
            contentItem: Object,
        },
        methods: {
            showComponent() {
                console.log(this.contentItem.componentName);
                // Hier de eventBus.changeComponent(this.menuItem.componentName);
                // Parameter definieren als component op Rollup-component.vue om het bijbehorende component in de rollup te tonen.
            },
        },
    }
</script>

<style>
    .content-text {
        font-size: .6em;
        font-weight: 500;
    }
    .icon {
        width: auto;
        height: 60px;
        display: inline-block;
    }
</style>
