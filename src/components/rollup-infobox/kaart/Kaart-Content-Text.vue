<template>
    <div class="item">
        <a class="item-link"
           href="#"
           @click.prevent="showComponent">{{ contentItem.itemText }}
        </a>
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
                // Hier de eventBus.changeComponent(this.contentItem.componentName);
                // Parameter definieren als component op Rollup-component.vue om het bijbehorende component in de rollup te tonen.
            },
        },
    }
</script>

<style>
    .item {
        border-bottom: solid .5px #F0F0F0;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: left;
        padding-left: 20px;
    }
    .item-link {
        color: #2c3e50;
    }
    .item-link:hover {
        color: #2c3e50;
    }
</style>
