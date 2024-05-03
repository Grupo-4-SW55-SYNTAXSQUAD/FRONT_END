<template>
  <div class="bg-white p-4 shadow-md">
    <img :src="destino.imagen" alt="Destino Image">
    <h3 class="font-semibold mt-2">{{ destino.titulo }}</h3>
    <router-link  to="infodestination">
      <button class="bg-purple-600 text-white px-4 py-2 rounded-lg mt-2 hover:bg-purple-700">Ver Detalles</button>
    </router-link>

  </div>
</template>

<script>
export default {
  props: {
    destino: {
      type: Object,
      required: true,
      default: {
        imagen: '',
        titulo: '',
      },
    },
  },
};
</script>
