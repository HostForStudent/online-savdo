<template>
  <div class="simple">
     <router-view/>
    <div class="container">
      <BackArrow class="simple__arrow" />
      <button @click="this.$router.push('/SingUp')" class="simple__remove"></button>
      <h3 class="simple__title">Шахсий кабинет</h3>
      <div class="simple__main">
        <AccountInfo />
      </div>
      <Nav class="simple__nav" />
    </div>
  </div>
</template>

<script>
import BackArrow from "@/components/back-arrow.vue";
import Nav from "@/components/Nav.vue";
import AccountInfo from "@/components/account-info.vue";
export default {
  components: {
    BackArrow,
    Nav,
    AccountInfo,
  },
};
</script>

<style lang='scss'>
.simple__remove {
  position: absolute;
  display: block;
  right: 10px;
  top: 10px;
  width: 22px;
  height: 22px;
  background: url("@/assets/icons/pencil.svg") center / cover no-repeat;
}
</style>