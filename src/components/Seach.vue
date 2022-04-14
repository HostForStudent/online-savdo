<template>
  <form @submit.prevent="seachForm" class="seach input-div">
    <input class="input" placeholder="Қидириш" type="text" />
    <button class="seach__icon"></button>
  </form>
</template>

<script>
export default {
  methods: {
    seachForm() {
      console.log("seach");
    },
  },
};
</script>

<style lang="scss">
form.seach {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
  display: block;
  width: 100%;
  margin: 0 auto;
  &::before {
    background: url("@/assets/icons/seach.svg") center / cover no-repeat;
    width: 24px;
  }
  input.input {
    width: 100%;
    height: 50px;
    &::placeholder {
      color: #939eb4;
    }
    padding: 18px 60px 18px 60px;
  }
}
.seach__icon {
  position: absolute;
  right: 18px;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);
  background: url("@/assets/icons/menu.svg") center / cover no-repeat;
}
</style>