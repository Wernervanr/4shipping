<template>
    <div class="col-2 pl-1">
        <div class="d-flex flex-column">
            <img class="icon pt-1 pb-1 ml-auto mr-auto"
                 alt=" "
                 :src="'/src/components/rollup-infobox/kaart/assets/' + menuItem.imagename"
                 @click.prevent="showComponent(menuItem.menutext)">
        </div>
        <span class="menu-text">{{ menuItem.menutext }}</span>
    </div>
</template>

<script>
    export default {
        props: [
            'menuItem',
        ],
        methods: {
            showComponent(item) {
                // Hier de eventBus.changeComponent(item), (item) definieren als component op rollup-component.vue om het bijbehorende component in de rollup te tonen.
            },
        },
    }
</script>

<style>
    .menu-text {
        font-size: .6em;
        font-weight: 500;
    }
    .icon {
        width: auto;
        height: 60px;
        display: inline-block;
    }
</style>
