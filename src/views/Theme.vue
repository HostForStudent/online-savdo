<template>
  <div class="modal">
    <div class="modal__wrapper">
      <form @submit.prevent="themeFunc" class="theme">
        <div class="theme__title">Илова мавзуси</div>
        <div class="theme__radio-cont">
          <div class="theme__div-radio">
            <input
              type="radio"
              class="custom-checkbox theme__radio"
              id="save"
              name="theme"
              value="default"
            />
            <label for="save">Стандарт</label>
          </div>
          <div class="theme__div-radio">
            <input
              type="radio"
              class="custom-checkbox theme__radio"
              id="save1"
              name="theme"
              value="blue"
            />
            <label for="save1">Кўк</label>
          </div>
          <div class="theme__div-radio">
            <input
              type="radio"
              class="custom-checkbox theme__radio"
              id="save2"
              name="theme"
              value="orange"
            />
            <label for="save2">Апелсин</label>
          </div>
        </div>
        <button class="theme__buy buy input">Сотиб олиш</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    themeFunc() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang='scss'>
.modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
}
.modal__wrapper {
  background: #000;
  background: rgba(33, 45, 57, 0.5);
  backdrop-filter: blur(15px);
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
   padding: 10px;
}
.theme {
  background: #ffffff;
  border-radius: 7px;
  padding: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2c3e50;
  text-align: left;
}
.theme__title {
  margin-bottom: 45px;
}
.theme__radio-cont {
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
}
.theme__radio {
  display: none;
}
.theme__div-radio {
  display: inline-block;
  margin: 14px 0;
  margin-left: 20px;
  margin-bottom: 30px;
}
.buy.theme__buy {
   width: 260px;
  background: #2c3e50;
  border-radius: 7px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
}
</style>