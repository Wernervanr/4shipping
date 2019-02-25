<template>
    <div class="menu-bar menu-position row">
        <menu-element v-for="(menuItem, index) in menuItems"
                      :key="index"
                      :menuItem="menuItem"
                      :activeItem="activeItem"
                      v-on:item-is-clicked="changeActiveItem">
        </menu-element>
    </div>
</template>

<script>
    import MenuElement from './Menu-Element.vue'

    export default {
        data () {
            return {
                activeItem: 'appKaartInfo',
                menuItems: {
                    kaart: {
                        itemname: 'appKaartInfo',
                        imagename: 'kaart.svg',
                        menutext: 'Kaart/route'
                    },
                    vracht: {
                        itemname: 'appVrachtInfo',
                        imagename: 'vracht.svg',
                        menutext: 'Vracht'
                    },
                    transport: {
                        itemname: 'appTransportInfo',
                        imagename: 'transport.svg',
                        menutext: 'Transport'
                    },
                    meer: {
                        itemname: 'appMeerInfo',
                        imagename: 'meer.svg',
                        menutext: 'Meer'
                    },
                },
            }
        },
        methods: {
            changeActiveItem (event) {
                this.activeItem = event;
                this.$emit('item-activated', this.activeItem);
            },
        },
        components: {
            menuElement: MenuElement,
        }
    }
</script>

<style>
    .row {
        margin: 0;
    }
    .menu-bar {
        background: #16153D;
        width: 100%;
    }
    .menu-position {
        position: absolute;
        bottom: 0;
        z-index: 10;
    }
</style>
