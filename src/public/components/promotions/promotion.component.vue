<script>

import PromotionList from "@/public/components/promotions/promotion-list.component.vue";
import PromotionCard from "@/public/components/promotions/promotion-card.component.vue";

export default {
  name: "promotion",
  components: {PromotionCard, PromotionList},
}
</script>

<template>
  <promotion-list></promotion-list>
</template>