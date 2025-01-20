<script>
export default {
    props: {
        flex: {
            type: Boolean,
            default: false
        },
        w100: {
            type: Boolean,
            default: false
        },
        wrap: {
            type: Boolean,
            default: false
        },
        vertical: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<template>
    <div class="app-row" :class="{'app-row-flex': flex, 'app-row-w100': w100, 'app-row-wrap': wrap, 'app-row-vertical': vertical}">
        <slot></slot>
    </div>
</template>

<style>

.app-row {
    display: flex;
    align-items: center;
    justify-content: center;
}

.app-row-flex > {
    flex: 1 0 0px;
}

.app-row-w100 {
    width: 100%;
}

.app-row-wrap {
    flex-wrap: wrap;
}

.app-row-vertical {
    flex-direction: column;
}

</style>