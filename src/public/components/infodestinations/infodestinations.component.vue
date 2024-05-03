<template>
  <div class="max-w-4xl mx-auto p-4">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
      <ImageSection />
      <RatingSection />
    </div>

    <div class="mt-4 p-4 bg-blue-100 rounded-lg">
      <h3 class="text-lg font-bold text-blue-800">Cusco</h3>
      <h4 class="font-semibold">Descripción</h4>
      <p>Cusco, ubicado en el sureste de Perú, es una ciudad con una rica historia y un impresionante legado cultural. Fue la capital del imperio Inca y todavía conserva numerosos vestigios de su gloriosa pasado, como el famoso complejo arqueológico de Machu Picchu, que se encuentra a poca distancia en tren o a pie.</p>
    </div>
  </div>
</template>

<script setup>
import ImageSection from './imagesection.component.vue';
import RatingSection from './ratingsection.component.vue';
const starClasses = 'text-yellow-400 text-xl';
</script>
