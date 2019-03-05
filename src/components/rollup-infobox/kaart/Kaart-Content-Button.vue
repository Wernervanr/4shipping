<template>
    <div class="col-2 pl-0 ml-auto mr-auto">
        <div class="d-flex flex-column">
            <div class="ml-auto mr-auto">
                <p :class="['icon', contentItem.itemClass]"
                   @click="showComponent"></p>
                <br>
                <span class="content-text">{{ contentItem.itemText }}</span>
            </div>
        </div>
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
                eventBus.changeSubComponent(this.contentItem.componentName);
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
        font-size: 25px;
        color: white;
        width: 50px;
        height: 50px;
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
