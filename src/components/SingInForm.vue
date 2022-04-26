<template>
  <transition name="add" appear>
    <form
      @submit.prevent="singInFunc"
      autocomplete="off"
      action="SingIn"
      class="form"
    >
      <transition name="formModal" appear>
        <FormModal v-if="showModal" />
      </transition>
      <h2 class="title">Онлайн Савдо</h2>
      <h3 class="sub-title">Давом этиш учун тизимга киринг!</h3>
      <div class="form__tel form__input-tel input-div">
        <input
          class="form__input phone-input"
          type="tel"
          name="tel"
          id="phone"
          v-model="tel_numb"
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
      <div class="form__row">
        <input
          type="checkbox"
          class="custom-checkbox"
          id="save"
          name="save"
          value="yes"
        />
        <label for="save">Сақлаш</label>
        <a href="#" class="form__forgot">Паролни унутдингизми ?</a>
      </div>
      <button class="form__btn">КИРИШ</button>
      <p class="form__sing">
        Рўйхатдан ўтмаганмисиз?
        <router-link to="/SingUp">Рўйхатдан ўтиш</router-link>
      </p>
    </form>
  </transition>
</template>

<script>
import FormModal from "@/components/Forn-modal.vue";
import IMask from "imask";
import { createElementBlock, createElementVNode } from "@vue/runtime-core";
export default {
  data() {
    return {
      showModal: false,
      tel_numb: "",
      tel_obj: "",
      password: "",
    };
  },
  components: { FormModal },
  methods: {
    singInFunc() {
      if (!this.showModal) {
        this.showModal = true;
        setTimeout(() => {
          this.showModal = false;
        }, 3000);
      }
      let inputValidate = (selector, lengthMax, length) => {
        const input = document.querySelector(selector);
        const message = document.createElement("div");
        message.classList.add("error_mess");
        if (length < lengthMax) {
          if (!input.classList.contains("error")) {
            input.classList.add("error");
            message.innerHTML = `введите хотя бы ${lengthMax} чисел`;
            input.after(message);
          }
        } else {
          if (input.classList.contains("error")) {
            input.classList.remove("error");
            const message = input.nextElementSibling;
            message.remove();
          }
        }
      };
      inputValidate(".form__input-tel", 12, this.tel_obj.unmaskedValue.length);
      inputValidate(".form__input-password", 4, this.password.length);
    },
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
  },
  mounted() {
    this.maskForInput();
  },
};
</script>

<style lang="scss">
.custom-checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.custom-checkbox + label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.custom-checkbox + label::before {
  content: "";
  display: inline-block;
  width: 1em;
  height: 1em;
  flex-shrink: 0;
  flex-grow: 0;
  border: 1px solid #adb5bd;
  border-radius: 50%;
  margin-right: 0.5em;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 50% 50%;
  transition: all 0.3s;
}
.custom-checkbox:checked + label::before {
  transition: all 0.3s;
  border-radius: 50%;
  border-color: #2c3e50;
  background-color: #2c3e50;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}

/* анимация */

.formModal-enter-active {
  animation: modalForm 1s linear;
}
.formModal-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.formModal-leave-active {
  transition: all 0.8s ease;
}
@keyframes modalForm {
  0% {
    opacity: 0;
    transform: translateY(-60px);
  }
  50% {
    opacity: 1;
    transform: translateY(0px);
  }
  60% {
    transform: translateX(-8px);
  }
  70% {
    transform: translateX(8px);
  }
  80% {
    transform: translateX(-4px);
  }
  90% {
    transform: translateX(4px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
