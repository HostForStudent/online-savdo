<template>
  <transition name="arrow" appear>
    <button @click="backFunc" class="product__arrow"></button>
  </transition>
</template>

<script>
export default {
  methods: {
    backFunc() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='scss'>
.product__arrow {
  z-index: 5;
  padding: 8px;
  width: 30px;
  height: 15px;
  background: url("@/assets/icons/back.svg") center/ cover no-repeat;
}
</style>