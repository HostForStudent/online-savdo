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
    <div class="form__text">
      <input
        class="form__input"
        type="text"
        placeholder="Исм Фамилия"
        name="name"
      />
    </div>
    <div class="form__tel input-div">
      <input
        class="form__input"
        type="tel"
        placeholder="+998 (90) 160-80-90"
        name="tel"
      />
    </div>
    <div class="form__select">
      <select 
        class="form__select-elem">
        <option value="" style="display:none;" disabled selected>Вилоятни танланг</option>
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
    <div class="form__text">
      <input class="form__input" type="text" placeholder="Манзил" name="name" />
    </div>
    <div class="form__passw input-div">
      <input
        class="form__input"
        type="password"
        placeholder="Парол"
        name="passw"
      />
    </div>
    <div class="form__passw input-div">
      <input
        class="form__input"
        type="password"
        placeholder="Паролни тасдиқланг"
        name="passw"
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
export default {
  computed: {
    SingUpFunc() {
      return this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style lang="scss">
.form__text .form__input {
  padding: 18px 20px 18px 20px;
}
.form__select {
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
.form__sing{
   padding: 0 5px;
   line-height: 150%;
}
</style>