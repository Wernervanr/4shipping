<template>
    <div class="col-2 pl-1">
        <div class="d-flex flex-column">
            <img class="icon pt-1 pb-1 ml-auto mr-auto"
                 alt=" "
                 :src="'/src/components/rollup-infobox/kaart/assets/' + menuItem.imagename">
        </div>
        <span class="menu-text">{{ menuItem.menutext }}</span>
    </div>
</template>

<script>
    export default {
        props: [
            'menuItem',
        ],
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
