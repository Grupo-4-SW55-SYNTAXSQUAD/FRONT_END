<template>
  <pv-card class="card-component">
    <template #header>
      <img :alt="owner.nameAgency" :src="owner.imageUrl" />
    </template>
    <template #title>{{ owner.nameActivity }}</template>
    <template #subtitle>{{ owner.nameAgency }}</template>
    <template #content>
      <p class="m-0">{{ owner.description }}</p>
    </template>
    <template #footer>
      <div class="flex gap-3 mt-1">
        <router-link :to="'/' + owner.id">
          <pv-button label="Ver Detalles" />
        </router-link>
      </div>
    </template>
  </pv-card>
</template>

<script>
export default {
  props: {
    owner: Object,
  },
};
</script>

<style>
.p-card-caption {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  & .p-card-title {
    font-weight: 800;
  }
}
.router-class {
  display: flex;
  flex-direction: column;
  align-items: center;
  .p-card-body {
    padding: 1rem 0;
  }
  & > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
}
.p-button-label {
  padding: 0.5rem 1rem !important;
}
.p-button {
  padding: 0.5rem 1rem !important;
}
.card-component {
  background-color: #d5d5d5;
  display: flex;
  align-items: center;
  /* overflow: unset !important; */

  .p-card-body {
    padding: 1rem 2rem;
  }
  .p-card-header {
    max-width: 450px;
    & img {
      width: 100%;
    }
  }
}
</style>
