<template>
  <div>
    <div class="mb-4">
      <h3 class="font-semibold">Calificación</h3>
      <div class="flex">
        <span v-for="i in 5" :key="i" class="starClasses">★</span>
      </div>
    </div>
    <div>
      <h3 class="font-semibold mb-2">Comentarios:</h3>
      <div class="bg-zinc-100 p-2 rounded-lg">
        <p class="font-semibold">Jose Manuel</p>
        <p>Me encantó Machu Picchu.</p>
      </div>
    </div>
  </div>
</template>