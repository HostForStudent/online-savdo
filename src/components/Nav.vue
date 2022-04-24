<template>
  <transition name="navel" appear>
    <ul class="nav">
      <li v-for="item in navigator" :key="item.id">
        <router-link class="nav__item" :to="item.href">
          <img
            ref="img"
            :src="require('../assets/icons/' + item.src)"
            :alt="item.name"
          />
        </router-link>
      </li>
    </ul>
  </transition>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      icons: [],
    };
  },
  computed: {
    ...mapState(["navigator"]),
  },
};
</script>

<style lang="scss">
.nav__item {
  img {
    opacity: 0.5;
  }
}
.nav {
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 10px;
  width: calc(100% - 20px);
  max-width: 600px;
  display: block;
  height: 60px;
  background: #2c3e50;
  box-shadow: 0px 0px 20px rgba(139, 139, 139, 0.15);
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>