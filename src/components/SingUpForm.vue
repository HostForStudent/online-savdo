<template>
  <transition name="add" appear>
    <form
      @submit.prevent="SingUpFunc"
      autocomplete="off"
      action="SingUp"
      class="form"
    >
      <h2 class="title">Онлайн Савдо</h2>
      <h3 class="sub-title">Давом этиш учун тизимга киринг!</h3>
      <div class="form__text form__input-user-name">
        <input
          class="form__input"
          type="text"
          placeholder="Исм Фамилия"
          name="name"
          v-model="userName"
        />
      </div>
      <div class="form__tel form__input-tel input-div">
        <input
          v-model="tel_numb"
          class="form__input phone-input"
          type="tel"
          name="tel"
        />
      </div>
      <div class="form__select form__input-select">
        <select v-model="select" class="form__select-elem">
          <option value="" style="display: none" disabled selected>
            Вилоятни танланг
          </option>
          <option value="1">Тошкент ш.</option>
          <option value="2">Андижон вилояти</option>
          <option value="3">Бухоро вилояти</option>
          <option value="4">Фарғона вилояти</option>
          <option value="5">Жиззах вилояти</option>
          <option value="6">Хоразм вилояти</option>
          <option value="7">Наманган вилояти</option>
          <option value="8">Навоий вилояти</option>
          <option value="9">Қашқадарё вилояти</option>
          <option value="10">Қорақалпоғистон Республикаси</option>
          <option value="11">Самарқанд вилояти</option>
          <option value="12">Сирдарё вилояти</option>
          <option value="13">Сурхондарё вилояти</option>
          <option value="14">Тошкент вилояти</option>
        </select>
      </div>
      <div class="form__text form__input-location">
        <input
          class="form__input"
          type="text"
          placeholder="Манзил"
          name="name"
          v-model="location"
        />
      </div>
      <div class="form__passw form__input-password input-div">
        <input
          class="form__input"
          type="password"
          placeholder="Парол"
          name="passw"
          v-model="password"
        />
      </div>

      <button class="form__btn">РЎЙХАТДАН ЎТИШ</button>
      <p class="form__sing">
        Сиз алла қачон рўйхатдан ўтганмисиз ?
        <router-link to="/">Тизимга кириш</router-link>
      </p>
    </form>
  </transition>
</template>

<script>
import IMask from "imask";
export default {
  computed: {},
  mounted() {
    this.maskForInput();
  },
  data() {
    return {
      tel_numb: "",
      tel_obj: "",
      password: "",
      userName: "",
      location: "",
      select: "",
    };
  },
  methods: {
    maskForInput() {
      const elments = document.querySelectorAll(".phone-input");
      let tel_numb;
      for (let index = 0; index < elments.length; index++) {
        const element = elments[index];
        tel_numb = IMask(element, {
          mask: "+{998}(00)000-00-00",
          lazy: false, // make placeholder always visible
          placeholderChar: "_", // defaults to '_'
        });
      }
      this.tel_obj = tel_numb;
      this.tel_numb = tel_numb.value;
    },
    SingUpFunc() {
      let inputValidate = (selector, lengthMax, length, messageVal) => {
        const input = document.querySelector(selector);
        const message = document.createElement("div");
        message.classList.add("error_mess");
        if (length < lengthMax) {
          if (!input.classList.contains("error")) {
            input.classList.add("error");
            message.innerHTML =
              messageVal || `введите хотя бы ${lengthMax} чисел`;
            input.after(message);
          }
        } else {
          if (input.classList.contains("error")) {
            input.classList.remove("error");
            const message = input.nextElementSibling;
            message.remove();
          }
        }
        if (document.querySelectorAll(".error_mess").length < 1) {
          this.$router.push({ name: "Home" });
        }
      };
      inputValidate(
        ".form__input-user-name",
        2,
        this.userName.length,
        "введите имю-фамилию"
      );
      inputValidate(
        ".form__input-location",
        5,
        this.location.length,
        "введите город"
      );
      inputValidate(".form__input-tel", 12, this.tel_obj.unmaskedValue.length);
      inputValidate(".form__input-password", 4, this.password.length);
      inputValidate(
        ".form__input-select",
        1,
        this.select.length,
        "выберите ригион"
      );
    },
  },
};
</script>

<style lang="scss">
.form__text .form__input {
  padding: 18px 20px 18px 20px;
}
.form__text{
   margin: 10px auto;
}
.form__select {
  margin: 10px auto;
  select,
  option {
    color: #2c3e50;
    border-radius: 5px;
    background: #ffffff;
    width: 353px;
    height: 55px;
    display: block;
    margin: 10px auto;
    padding: 18px 20px 18px 20px;
    text-align: left;
    font-size: 16px;
  }
}
.form__select {
  border-radius: 5px;
  overflow: hidden;
}
.form__select select {
  margin: 0;
}

.form__sing {
  padding: 0 5px;
  line-height: 150%;
}
</style>