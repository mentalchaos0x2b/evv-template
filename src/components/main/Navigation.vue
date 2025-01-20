<script setup>
import Row from '../global/Row.vue';
import Favicon from '../media/Favicon.vue';
</script>

<template>
    <n-card class="app-navigation" >
        <Row style="height: 100%; justify-content: space-between; max-height: 100%;">
            <Row>
                <Favicon/>
                <Row vertical style="align-items: flex-start;">
                    <h1>DATA-TECH</h1>
                    <h5>Панель управления</h5>
                </Row>
            </Row>
            <Row style="height: 100%; gap: .25rem;">

            </Row>
        </Row>
    </n-card>
</template>

<style>

.app-navigation {
    width: 100%;
    height: 5rem;
    max-height: 5rem;
}

.app-navigation .n-card__content {
    padding: .5rem !important;
}

</style>