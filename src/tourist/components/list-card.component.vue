<template>
  <div>
    <card v-for="owner in owners" :key="owner.id" :owner="owner" />
  </div>
</template>

<script>
import Card from '../../public/components/card.component.vue';
import { BaseService } from '../../shared/services/base.service';

const service = new BaseService();

export default {
  components: {
    Card,
  },
  data() {
    return {
      owners: [],
    };
  },
  created() {
    service.getAllOwners().then((response) => {
      this.owners = response.data;
    });
  },
};
</script>
