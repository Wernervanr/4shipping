<template>
    <div class="col-2 mr-auto ml-auto mt-auto mb-auto"
         v-bind:class="{ pink: isClicked }"
         v-on:click="makePink">
        <div class="img-wrap">
            <img class="pt-2" :src="'/src/assets/' + menuItem.imagename">
        </div>
        <br>
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
            makePink () {
                this.$emit('item-is-clicked', this.menuItem.itemname);
                this.isClicked = !this.isClicked;
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
    .pink {
        filter: sepia(100%) contrast(10%) saturate(10000%) hue-rotate(245deg);
    }
    img {
        width: auto;
        height: 100%;
    }

    .img-wrap {
        width: auto;
        height: 75px;
        display: inline-block;
    }

    .description-text {
        color: white;
        font-size: .9em;
    }
</style>
