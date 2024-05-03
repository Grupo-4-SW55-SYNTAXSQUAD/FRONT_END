<script setup>

</script>

<template>
  <h1>Destinos mejor calificados</h1>
  <div class="flex gap-5">

    <pv-card>
      <template #header>
        <img class = "card-img" src = "../../../components/icons/region/machupicchu1.jpg">
      </template>
      <template #title>

          <p>Machu Picchu, Cusco</p>

      </template>
    </pv-card>
    <pv-card>
      <template #header>
        <img class = "card-img" src = "../../../components/icons/region/machupicchu2.jpg">
      </template>
      <template #title class = "title-template">
        <p>Machu Picchu, Cusco</p>
      </template>
    </pv-card>
    <pv-card>
      <template #header>
        <img class = "card-img" src = "../../../components/icons/region/machupicchu3.jpg">
      </template>
      <template #title style="padding-top: 0;">
        <p>Machu Picchu, Cusco</p>
      </template>
    </pv-card>
  </div>

</template>

<style scoped>

.card-img{
  padding: 0.75em;
}
</style>