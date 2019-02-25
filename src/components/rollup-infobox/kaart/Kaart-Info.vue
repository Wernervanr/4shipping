<template>
    <div>
        <p class="title">Verkeersinformatie voor de binnenvaart</p>
        <div class="content-holder row justify-content-around justify-content-md-center">
            <content-button v-for="(menuIcon, index) in menuIcons" :key="index" :menu-item="menuIcon"></content-button>
        </div>
        <hr class="divider">
        <div class="item" v-for="item in items">
            {{ item }}
        </div>
    </div>
</template>

<script>
    import ContentButton from './Kaart-Info-Content-Button'
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
                    },
                },
            }
        },
        components: {
            contentButton: ContentButton
        },
    }

</script>

<style>
    .divider {
        margin-bottom: .3em;
    }

    .content-holder {
        margin: 0;
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
