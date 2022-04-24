<template>
  <div class="simple">
    <transition name="themeWrapper">
      <Theme v-if="showModal" :closeFunc="closeModal" />
    </transition>
    <router-view />
    <div class="container">
      <BackArrow class="simple__arrow"/>
      <transition name="remove" appear>
        <button
          @click="this.$router.push('/SingUp')"
          class="simple__remove"
        ></button>   
      </transition>
      <transition name="title" appear>
        <h3 class="simple__title">Шахсий кабинет</h3>
      </transition>
      <div class="simple__main">
        <AccountInfo :func="openModal" />
      </div>
      <Nav class="simple__nav" />
    </div>
  </div>
</template>

<script>
import BackArrow from "@/components/back-arrow.vue";
import Nav from "@/components/Nav.vue";
import AccountInfo from "@/components/account-info.vue";
import Theme from "@/components/Theme.vue";
export default {
  components: {
    BackArrow,
    Nav,
    AccountInfo,
    Theme,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
  },
};
</script>

<style lang='scss'>
.themeWrapper-enter-from {
  opacity: 0;
}
.themeWrapper-leave-to {
  opacity: 0;
}
.themeWrapper-enter-active,
.themeWrapper-leave-active {
  transition: all 0.5s ease;
}
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