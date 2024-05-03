<script>
import PromotionCard from "../promotions/promotion-card.component.vue";

export default{
  name: "promotion-list",
  components: {PromotionCard},
  props:{
    promotion: Array
  }
}
</script>

<template>
  <div class="game-list">
    <promotion-card ></promotion-card>
  </div>
</template>

<style scoped>
.game-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(750px, 1fr));
  gap: 50px;
}
</style>