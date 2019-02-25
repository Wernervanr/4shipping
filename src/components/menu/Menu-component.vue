<template>
    <div class="menu-bar row">
        <menu-element v-for="(menuItem, index) in menuItems"
                      :key="index"
                      :menuItem="menuItem">
        </menu-element>
    </div>
</template>

<script>
    import MenuElement from './Menu-Element.vue'

    export default {
        data () {
            return {
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
        components: {
            menuElement: MenuElement,
        }
    }
</script>

<style>
    .menu-bar {
        background: #16153D;
        width: 100%;
        position: absolute;
        bottom: 0;
        z-index: 1;
        margin: 0;
    }
</style>
