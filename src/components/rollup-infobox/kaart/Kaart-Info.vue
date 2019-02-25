<template>
    <div>
        <p class="title">Verkeersinformatie voor de binnenvaart</p>
        <div class="row justify-content-around justify-content-md-center">
            <info-item v-for="(menuIcon, index) in menuIcons" :key="index" :menu-item="menuIcon"></info-item>
        </div>
        <hr>
        <div class="item" v-for="item in items">
            {{ item }}
        </div>
    </div>
</template>

<script>
    import Icon from './Kaart-Info-Content-Button'
    export default {
        data () {
            return {
                items: [
                    'Autosteiger',
                    'Bunkerstation',
                    'Drinkwater',
                    'Sluizen',
                    'Haven',
                    'Restaurants',
                    'Toiletten',
                    'Aanleg plaatsen',
                    'Tank stations'
                ],
                menuIcons: {
                    arrow: {
                        imagename: 'arrow.svg',
                        menutext: 'Sluizen'
                    },
                    anker: {
                        imagename: 'anker.svg',
                        menutext: 'Ligplaats'
                    },
                    waterpas: {
                        imagename: 'waterpas.svg',
                        menutext: 'Waterstand'
                    },
                    fabriek: {
                        imagename: 'fabriek.svg',
                        menutext: 'Terminals'
                    },
                    afvalbak: {
                        imagename: 'afvalbak.svg',
                        menutext: 'Afvalplaats'
                    }
                },
            }
        },
        components: {
            infoItem: Icon
        },
    }

</script>

<style>
    hr {
        margin-bottom: .3em;
    }
    .item {
        border-bottom: solid .5px #F0F0F0;
        padding-top: 10px;
        padding-bottom: 10px;
        text-align: left;
        padding-left: 40px;
    }
    .title {
        font-size: 1.2em;
        margin: 20px 0 20px 0;
        font-weight: 500;
    }
</style>
