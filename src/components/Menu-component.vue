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
    import MenuElement from './Menu-element-component.vue'

    export default {
        data () {
            return {
                activeItem: 'kaart',
                menuItems: {
                    kaart: {
                        itemname: 'kaart',
                        imagename: 'Kaart.svg',
                        menutext: 'Kaart/route'
                    },
                    vracht: {
                        itemname: 'vracht',
                        imagename: 'Vracht.svg',
                        menutext: 'Vracht'
                    },
                    transport: {
                        itemname: 'transport',
                        imagename: 'Transport.svg',
                        menutext: 'Transport'
                    },
                    meer: {
                        itemname: 'meer',
                        imagename: 'Meer.svg',
                        menutext: 'Meer'
                    },

                },
            }
        },
        methods: {
            changeActiveItem (event) {
                this.activeItem = event;
                this.$emit('item-activated', this.activeItem);
            }
        },
        components: {
            menuElement: MenuElement
        }
    }

</script>

<style>
    .row {
        margin: 0;
    }

    .menu-bar {
        background: #16153D;
        height: 10%;
        min-height: 70px;
        width: 100%;

    }

    .menu-position {
        position: absolute;
        bottom: 0;
        z-index: 2;
    }
</style>
