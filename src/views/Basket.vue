<template>
  <div class="simple">
    <div class="container">
      <BackArrow class="simple__arrow" />
      <h3 class="simple__title">Саватча</h3>
      <div class="simple__main">
        <BasketCard :cards='products'/>
      </div>
      <Nav class="simple__nav" />
    </div>
  </div>
</template>

<script>
import BackArrow from "@/components/back-arrow.vue";
import Nav from "@/components/Nav.vue";
import BasketCard from "@/components/basket-card.vue";
import { mapState } from "vuex";
export default {
  components: {
    BackArrow,
    Nav,
    BasketCard,
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style>
</style>