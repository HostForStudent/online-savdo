<template>
  <div class="add">
    <div class="add__item">
      <button @click="minus" class="add__minus">-</button>
      <input v-bind="this.value" :value="this.value" class="add__window" />
      <button @click="pluss" class="add__plus">+</button>
    </div>
    <div class="add__item">
      <input
        type="checkbox"
        class="add__checkbox"
        id="adds"
        name="adds"
        value="yes"
      />
      <label class="add__checkbox-label" for="adds">Қўшиш</label>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 0,
    };
  },
  methods: {
    minus() {
      if (this.value > 0) {
        return --this.value;
      }
    },
    pluss() {
      return ++this.value;
    },
  },
};
</script>

<style lang='scss'>
.add {
  max-width: 402px;
  margin: 0 auto;
  background: #2c3e50;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 11px 15px;
}
.add__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.add__window {
  display: block;
  width: 64px;
  height: 33px;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 16.5px;
  margin: 0 5px;
}
.add__minus,
.add__plus {
  width: 33px;
  height: 33px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
  font-size: 20px;
}
.add__checkbox {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.add__checkbox {
  position: absolute;
  z-index: -1;
  opacity: 0;
}
.add__checkbox-label {
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
}
.add__checkbox + .add__checkbox-label {
  display: inline-flex;
  align-items: center;
  user-select: none;
}
.add__checkbox + .add__checkbox-label::before {
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
.add__checkbox:checked + .add__checkbox-label::before {
  transition: all 0.3s;
  border-radius: 50%;
  border-color: #538e96;
  background-color: #438a8e;
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
}
</style>