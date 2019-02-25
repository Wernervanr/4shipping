<template>
    <div class="searchbar-position">
        <input ref="autocomplete"
               placeholder="Waarheen? Of zoek faciliteiten."
               class="search-location"
               onfocus="value = ''"
               type="text"/>
    </div>
</template>

<script>
    export default {
        mounted() {
            this.$gmapApiPromiseLazy().then(() => {
                this.autocomplete = new google.maps.places.Autocomplete(
                    (this.$refs.autocomplete),
                    {types: ['geocode']}
                );

                this.autocomplete.addListener('place_changed', () => {
                    let place = this.autocomplete.getPlace();
                    let coordinates = {
                        lat: place.geometry.location.lat(),
                        lng: place.geometry.location.lng()
                    };
                    this.$emit('location-changed', coordinates);
                });
            });
        },
    }
</script>

<style scoped>
    *, *::after, *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }
    body {
        background-color: #dcdde1;
        color: #2f3640;
        padding: 3rem;
    }
    .search-location {
        display: block;
        width: 45vw;
        margin: 0 auto;
        font-size: 10px;
        font-weight: 400;
        outline: none;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 10px;
    }
    .searchbar-position {
        position: absolute;
        top: 30px;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;
    }
</style>
