<script setup>

import ChatPanelComponent from "./chatpanel.component.vue";
import ContactsPanelComponent from "./contactspanel.component.vue";
</script>

<template>
  <header>
    <div class = "flex justify-content-center gap-3">
      <chat-panel-component>
      </chat-panel-component>
      <contacts-panel-component>
      </contacts-panel-component>
    </div>
    <div style="height: 2em"></div>
  </header>
</template>

<style scoped>

</style>