<template>
    <div class="col-2 pl-1">
        <div class="d-flex flex-column">
            <div class="icon-holder ml-auto mr-auto">
                <p :class="['icon', contentItem.itemClass]"
                   @click="showComponent"></p>
            </div>
        </div>
        <span class="content-text">{{ contentItem.itemText }}</span>
    </div>
</template>

<script>
    import { eventBus } from '../../../main.js';
    export default {
        props: {
            contentItem: Object,
        },
        methods: {
            showComponent() {
                console.log(this.contentItem.componentName);
                // Hier de eventBus.changeComponent(this.menuItem.componentName);
                // Parameter definieren als component op Rollup-component.vue om het bijbehorende component in de rollup te tonen.
            },
        },
    }
</script>

<style>
    .content-text {
        font-size: .6em;
        font-weight: 500;
    }

    .icon {
        padding-top: 20%;
        margin-bottom: auto;
        font-size: 30px;
        color: white;
        width: 55px;
        height: 55px;
        border-radius: 50%;
    }
    .sluizen {
        background: #F5A623;
    }
    .anker {
        background: #7DD322;
    }
    .waterstand {
        background: #4B8FE2;
    }
    .terminals {
        background: #D0011B;
    }
    .afvalplaats {
        background: #9B9B9B;
    }
</style>
