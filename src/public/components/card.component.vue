<template>
  <Card style="width: 25rem; overflow: hidden">
    <template #header>
      <img :alt="owner.nameAgency" :src="owner.imageUrl" />
    </template>
    <template #title>{{ owner.nameActivity }} </template>
    <template #subtitle>Card subtitle</template>
    <template #content>
      <p class="m-0">{{ owner.description }}</p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <Button label="Cancel" severity="secondary" outlined class="w-full" />
        <Button label="Ver Más" class="w-full" />
      </div>
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';
export default {
  props: {
    owner: Object,
  },
};
</script>
