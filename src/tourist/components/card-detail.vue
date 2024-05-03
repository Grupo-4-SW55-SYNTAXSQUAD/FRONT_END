<template>
  <div v-if="owner">
    <img :alt="owner.nameAgency" :src="owner.imageUrl" />
    <pv-card :owner="owner">
      <template #title>{{ owner.nameActivity }}</template>
      <template #content>
        <p class="m-0">{{ owner.description }}</p>
      </template>
    </pv-card>
  </div>
  <div v-else>
    <p>Loading...</p>
  </div>
</template>

<script>
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();
export default {
  components: {},
  props: {
    ownerId: String,
  },
  data() {
    return {
      owner: null,
    };
  },
  created() {
    service.getOwnerById(this.ownerId).then((response) => {
      this.owner = response.data;
    });
  },
};
</script>

<style>
.p-card {
  margin-top: 3rem;
}
.p-card-body {
  max-width: 450px;
  width: 100%;
  background-color: #d6d6d6;
  padding: 2rem !important;
}
.p-card.p-component {
  display: flex;
  max-width: 450px;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
}
</style>
