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
                        componentName: 'appKaartInfo',
                        imageName: 'kaart.svg',
                        menuText: 'Kaart/route'
                    },
                    vracht: {
                        componentName: 'appVrachtInfo',
                        imageName: 'vracht.svg',
                        menuText: 'Vracht'
                    },
                    transport: {
                        componentName: 'appTransportInfo',
                        imageName: 'transport.svg',
                        menuText: 'Transport'
                    },
                    meer: {
                        componentName: 'appMeerInfo',
                        imageName: 'meer.svg',
                        menuText: 'Meer'
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
