<template>
  <div class="home">
    <div class="container">
      <Seach />
      <div class="main">
        <div class="cars__cotainer">
            <Card :category="products" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import Seach from "@/components/Seach.vue";
import Card from "@/components/Card.vue";
import { mapState } from "vuex";
export default {
  components: {
    Seach,
    Category,
    Card,
  },
  computed: {
    ...mapState(["products"]),
  },
};
</script>

<style lang="scss">
.home {
  .card__body {
    padding-bottom: 30px;
  }
}
.main {
  padding: 60px 0px 80px 0px;
}
</style>