<script setup>
import { darkTheme } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="darkTheme" abstract>
    <n-message-provider>
      <n-global-style />
      <div class="app-container">
        <router-view v-slot="{ Component }">
          <transition name="fade">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>
    </n-message-provider>
  </n-config-provider>
</template>

<style>
.app-container {
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.fade-enter {
  opacity: 0; /* Начальная прозрачность для входящего компонента */
  transform: translateY(10px); /* Начальное смещение для входящего компонента */
}

.fade-leave-active {
  opacity: 1; /* Прозрачность уходящего компонента */
  transform: translateY(0); /* Уходящий компонент остается на месте */
}

.fade-leave-to {
  opacity: 0; /* Конечная прозрачность для уходящего компонента */
  transform: translateY(10px); /* Уходящий компонент уезжает вниз */
}
</style>