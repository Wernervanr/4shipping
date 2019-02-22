<template>
    <div class="col-2 col-md-2">
        <div class="d-flex flex-column">
            <img class="icon pt-1 pb-1 ml-auto mr-auto" :src="'/src/assets/' + menuItem.imagename">
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
        font-size: .7em;
    }
    .icon {
        width: auto;
        height: 60px;
        display: inline-block;
    }


</style>
