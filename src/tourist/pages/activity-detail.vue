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
      ownerId: null,
    };
  },
  created() {
    this.ownerId = this.$route.params.id;
    console.log(this.ownerId);
  },
};
</script>
