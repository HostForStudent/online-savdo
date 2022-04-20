<template>
  <div class="modal">
    <div class="modal__wrapper" @click.self="closeFunc">
      <transition name="theme">
        <form @submit.prevent="themeFunc" v-if="showAnim" class="theme">
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
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: ["closeFunc"],
  data() {
    return {
      showAnim: false,
    };
  },
  methods: {
    themeFunc() {
      return this.closeFunc();
    },
  },
  mounted() {
    this.showAnim = true;
  },
};
</script>

<style lang='scss'>

.theme-enter-from {
  opacity: 0;
  transform: translateX(-100px);
}
.theme-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.theme-enter-active {
  transition: all 0.5s ease 0.2s;
}
.theme-leave-from {
  opacity: 1;
  transform: translateX(0px);
}
.theme-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}
.theme-leave-active {
  transition: all 0.5s;
}
.modal {
  position: fixed;
  z-index: 3;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100vh;
}
.modal__wrapper {
  background: rgba(33, 45, 57, 0.8);
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