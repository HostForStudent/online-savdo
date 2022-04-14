<template>
  <div class="profil">
    <div class="container">
       <router-view/>
      <Nav/>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav.vue";
export default {
  components: {
    Nav,
  },
};
</script>

<style>
</style>