<template>
  <div class="simple">
    <div class="container">
      <BackArrow class="simple__arrow" />
      <h3 class="simple__title">Тарих</h3>
      <div class="simple__main">
        <HistoryCard :cards="products" />
      </div>
      <Nav class="simple__nav" />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import BackArrow from "@/components/back-arrow.vue";
import Nav from "@/components/Nav.vue";
import HistoryCard from "@/components/history-card.vue";
export default {
  components: {
    BackArrow,
    Nav,
    HistoryCard,
  },
  computed:{
     ...mapState(["products"])
  }
};
</script>

<style lang='scss'>

</style>