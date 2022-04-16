<template>
  <div class="basket__cards">
    <div v-for="card in cards" :key="card.id" >
      <div class="card" v-if="card.addBasket">
        <div class="card__img" >
          <img :src="require('@/assets/img/product/' + card.imgSrc)" alt="" />
        </div>
        <div class="card__body">
          <h5 class="card__title">{{ card.name }}</h5>
          <em class="card__category">{{ card.category }}</em>
          <div class="card__price">{{ card.price }}</div>
          <p class="card__descr">{{ card.info }}</p>
          <div class="basket__add">
            <button @click="minusFunc(card.id)" class="add__minus">-</button>
            <div class="add__window">{{ card.amount }}</div>
            <button @click="plusFunc(card.id)" class="add__plus">+</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cards"],
  methods: {
    plusFunc(n) {
      this.cards[n].amount += 1;
    },
    minusFunc(n) {
      if (this.cards[n].amount > 0) {
        this.cards[n].amount -= 1;
      }
    },
  },
};
</script>
<style lang="scss">
.card__body {
  text-align: left;
  flex: 1 1 auto;
}
.basket__add {
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  .add__minus,
  .add__plus {
    color: #fff;
    background: #2c3e50;
  }
  .add__window {
    color: #2c3e50;
    background: #dfe2e9;
  }
}
@media (max-width: 567px) {
  .basket__cards .card__body {
    padding-bottom: 33px;
  }
}
</style>