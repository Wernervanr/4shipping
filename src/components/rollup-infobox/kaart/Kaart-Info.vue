<template>
    <div>
        <p class="title">Verkeersinformatie voor de binnenvaart</p>
        <div class="content-holder row justify-content-around justify-content-md-center">
            <content-button v-for="(itemWithImage, index) in itemsWithImage"
                            :key="index"
                            :content-item="itemWithImage">
            </content-button>
        </div>
        <hr class="divider">
        <content-text v-for="(item, index) in items"
                      :key="index"
                      :content-item="item">
        </content-text>
    </div>
</template>

<script>
    import ContentButton from './Kaart-Info-Content-Button'
    import ContentText from './Kaart-Text-Content'
    export default {
        data () {
            return {
                items: {
                    autosteiger: {
                        componentName: 'appAutoSteiger',
                        itemText: 'Autosteiger',
                    },
                    bunkerstation: {
                        componentName: 'appBunkerStation',
                        itemText: 'Bunkerstation',
                    },
                    drinkwater: {
                        componentName: 'appDrinkWater',
                        itemText: 'Drinkwater',
                    },
                    sluizen: {
                        componentName: 'appSluizen',
                        itemText: 'Sluizen',
                    },
                    haven: {
                        componentName: 'appHaven',
                        itemText: 'Haven',
                    },
                    restaurants: {
                        componentName: 'appRestaurants',
                        itemText: 'Restaurants',
                    },
                    toiletten: {
                        componentName: 'appToiletten',
                        itemText: 'Toiletten',
                    },
                    aanlegplaatsen: {
                        componentName: 'appAanlegPlaatsen',
                        itemText: 'Aanleg plaatsen',
                    },
                    tankstations: {
                        componentName: 'appTankStations',
                        itemText: 'Tank stations',
                    },
                },
                itemsWithImage: {
                    arrow: {
                        componentName: 'appSluizen',
                        imageName: 'arrow.svg',
                        itemText: 'Sluizen'
                    },
                    anker: {
                        componentName: 'appLigplaats',
                        imageName: 'anker.svg',
                        itemText: 'Ligplaats'
                    },
                    waterpas: {
                        componentName: 'appWaterstand',
                        imageName: 'waterpas.svg',
                        itemText: 'Waterstand'
                    },
                    fabriek: {
                        componentName: 'appTerminals',
                        imageName: 'fabriek.svg',
                        itemText: 'Terminals'
                    },
                    afvalbak: {
                        componentName: 'appAfvalplaats',
                        imageName: 'afvalbak.svg',
                        itemText: 'Afvalplaats'
                    },
                },
            }
        },
        components: {
            contentButton: ContentButton,
            contentText: ContentText
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
    .title {
        font-size: 1.2em;
        margin: 20px 0 20px 0;
        font-weight: 500;
    }
</style>
