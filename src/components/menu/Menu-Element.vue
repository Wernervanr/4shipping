<template>
    <div class="col-3 mr-auto ml-auto mt-auto mb-auto" v-bind:class="{ pink: isClicked }">
        <div class="d-flex flex-column">
            <img v-on:click="itemClicked"
                 class="menu-icon pt-1 pb-1 ml-auto mr-auto"
                 alt=" "
                 :src="'/src/components/menu/assets/' + menuItem.imagename">
        </div>
        <span class="description-text">{{ menuItem.menutext }}</span>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                isClicked: false,
            }
        },
        props: [
            'menuItem',
            'activeItem',
        ],
        methods: {
            itemClicked () {
                this.$emit('item-is-clicked', this.menuItem.itemname);
                this.isClicked = true;
            },
        },
        watch: {
            activeItem: function() {
                if (this.activeItem !== this.menuItem.itemname){
                    this.isClicked = false;
                }
            },
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
