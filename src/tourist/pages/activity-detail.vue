<template>
  <card-detail :owner-id="ownerId" />
</template>

<script>
import cardDetail from '../components/card-detail.vue';

export default {
  components: {
    cardDetail,
  },
  data() {
    return {
      ownerId: String,
    };
  },
  created() {
    this.ownerId = this.$route.params.id;
  },
};
</script>
