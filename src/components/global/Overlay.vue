<template>
    <div class="app-overlay">
        <slot></slot>
    </div>
</template>

<style>

.app-overlay {
    width: 100%;
    height: 100vh;

    overflow: hidden;
}

</style>