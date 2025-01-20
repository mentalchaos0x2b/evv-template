<script setup>
import Overlay from "../components/global/Overlay.vue";
import Logo from "../components/media/Logo.vue";
import Row from "../components/global/Row.vue";

import OrdersManager from "../managers/OrdersManager";
</script>

<script>
export default {
  data() {
    return {};
  },
  async mounted() {
    await this.initialize();
  },
  methods: {
    updateProgress(progress) {
      this.loading.progress = progress;
    },
    async initialize() {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      this.$router.push("/main");
    },
  },
};
</script>

<template>
  <Overlay style="display: flex; align-items: center; justify-content: center">
    <Row vertical>
      <Logo />
      <n-card>
        <Row style="gap: 1rem; justify-content: flex-start" w100>
          <n-spin></n-spin>
          <h3>Загрузка данных...</h3>
        </Row>
      </n-card>
    </Row>
  </Overlay>
</template>

<style></style>
