<script>
export default {
  props: {
    destino: {
      type: Object,
      required: true,
      default: {
        id: '',
        nombre: '',
        cantidad: 0,
        checked: false,
      },
    },
  },
};
</script>

<template>
  <li class="mb-2">
    <input type="checkbox" :id="destino.id" v-model="destino.checked">
    <label :for="destino.id">{{ destino.nombre }}</label>
    <span class="text-zinc-600">{{ destino.cantidad }}</span>
  </li>
</template>

