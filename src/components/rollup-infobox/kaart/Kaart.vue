<template>
    <div>
        <p class="title">Verkeersinformatie voor de binnenvaart</p>
        <div class="m-0 row justify-content-center">
            <content-button v-for="(itemWithIcon, index) in itemsWithIcon"
                            :key="index"
                            :content-item="itemWithIcon">
            </content-button>
        </div>
        <hr class="mb-1">
        <content-text v-for="(item, index) in items"
                      :key="index"
                      :content-item="item">
        </content-text>
    </div>
</template>

<script>
    import ContentButton from './Kaart-Content-Button'
    import ContentText from './Kaart-Content-Text'
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
                itemsWithIcon: {
                    arrow: {
                        componentName: 'appSluizen',
                        itemClass: 'fas fa-angle-double-up sluizen',
                        itemText: 'Sluizen'
                    },
                    anker: {
                        componentName: 'appLigplaats',
                        itemClass: 'fas fa-anchor anker',
                        itemText: 'Ligplaats'
                    },
                    waterpas: {
                        componentName: 'appWaterstand',
                        itemClass: 'fas fa-ruler-vertical waterstand',
                        itemText: 'Waterstand'
                    },
                    fabriek: {
                        componentName: 'appTerminals',
                        itemClass: 'fas fa-industry terminals',
                        itemText: 'Terminals'
                    },
                    afvalbak: {
                        componentName: 'appAfvalplaats',
                        itemClass: 'fas fa-trash-alt afvalplaats',
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
    .title {
        font-size: 1.2em;
        margin: 10px 0 20px 0;
        font-weight: 500;
    }
</style>
