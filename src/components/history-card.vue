<template>
  <div v-for="card in cards" :key="card.id" class="card-history">
    <div class="card__body">
      <div class="card-history__icon"></div>
      <div class="card-history__body">
        <div class="card-history__item">
          <h5 class="card__title">{{ card.name }}</h5>
          <em class="card__category">{{ card.category }}</em>
          <div class="card__price">1 x {{ card.price }}</div>
        </div>
        <div class="date">
          <div class="date__time">16:56</div>
          <div class="date__day">04/06/2021</div>
        </div>
      </div>
      <div class="card-history__price-big">{{ card.price }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cards"],
  computed: {},
};
</script>

<style lang='scss'>
.card-history {
  background: #fff;
  padding: 13px 25px 13px 10px;
  margin: 10px 0;
  box-shadow: 0px 4px 8px rgba(0, 204, 151, 0.05);
  border-radius: 7px;
}
.card-history__icon {
  position: absolute;
  left: 0px;
  top: 36px;
  width: 20px;
  height: 20px;
  background: url("@/assets/icons/check.svg") center / cover no-repeat;
}
.card-history__body {
  padding-left: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  border-bottom: 1px dashed rgba(147, 158, 180, 0.5);
  margin-bottom: 10px;
  .card__price {
    margin-bottom: 10px;
  }
}
.date {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #939eb4;
}
.date__time {
  margin-bottom: 10px;
}
.card-history__price-big {
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;
  color: #2c3e50;
}
@media (max-width: 568px) {
  .card-history__icon {
    display: none;
  }
  .card-history__body {
    padding-left: 0;
  }
  .card-history .card__body {
    margin-left: 0;
  }
}
</style>