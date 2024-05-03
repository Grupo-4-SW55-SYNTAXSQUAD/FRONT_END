
<script setup>
import ToolbarComponent from "@/public/components/toolbar.component.vue";
</script>

<template>
  <header>
    <toolbar-component>

    </toolbar-component>
    <router-view class ="router-class">

    </router-view>
  </header>
</template>

<style scoped>
.router-class{
  margin-top: 3em;
}
</style>