<template>
  <div v-for="card in category" :key="card.id" class="card">
    <div class="card__img">
      <img :src="require('@/assets/img/product/' + card.imgSrc)" alt="" />
    </div>
    <div class="card__body">
      <h5 class="card__title">{{ card.name }}</h5>
      <em class="card__category">{{ card.category }}</em>
      <div class="card__price">{{ card.price }}</div>
      <p class="card__descr">{{ card.info }}</p>
      <button class="card__btn">
        <router-link
          class="router-a"
          :to="{ name: 'Product', params: { id: card.id } }"
        >
          Саватчага қушиш
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["category"],
};
</script>

<style lang='scss'>
.card {
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 204, 151, 0.05);
  border-radius: 7px;
  padding: 18px;
  margin: 10px auto;
  width: 100%;
  color: #64697e;
  font-weight: 600;
}
.card__img {
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 200px;
    height: auto;
  }
}
.card__body {
  position: relative;
  margin-left: 20px;
  text-align: left;
}
.card__title {
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 10px;
}
.card__category {
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 10px;
  display: block;
}
.card__price {
  color: #2c3e50;
  font-size: 16px;
  line-height: 19px;
  margin-bottom: 20px;
}
.card__descr {
  font-size: 14px;
  line-height: 18px;
}
.card__btn {
  position: absolute;
  bottom: 10px;
  right: 10px;
  font-weight: 600;
  background: linear-gradient(93.96deg, #2c3e50 0%, #445b72 100%);
  border-radius: 17.5px;
  .router-a {
    height: 100%;
    width: 100%;
    padding: 11px 18px;
    display: block;
    font-size: 12px;
  }
  a {
    color: #ffffff;
  }
}
@media (max-width: 567px) {
  .card {
    justify-content: start;
    align-items: start;
    padding: 10px;
  }
  .card__descr {
    display: none;
  }
  .card__body {
    flex: 1 0 auto;
    margin-left: 7px;
  }
  .card__img img {
    width: 100px;
  }
  .card__btn .router-a {
      padding:5px 10px ;
   }
}
</style>