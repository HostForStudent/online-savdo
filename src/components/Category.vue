<template>
  <div class="category">
    <div class="category__descr">
      <h4 class="category__title">Бўлимлар</h4>
      <div class="category__other">Барчаси ></div>
    </div>
    <div class="category__row">
      <div v-for="item in category" :key="item.id" class="category__item">
        <div class="category__icon">
          <img :src="require('@/assets/img/' + item.imgSrc)" alt="foto" />
        </div>
        <div class="category__name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["category"]),
  },
};
</script>

<style lang="scss">
.category {
  padding: 0 10px;
  font-weight: 500;
  color: #64697e;
}
.category__descr {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 12px;
}
.category__title {
  font-size: 16px;
  line-height: 19px;
}
.category__other {
  font-size: 8px;
  line-height: 9px;
  text-align: right;
  text-decoration-line: underline;
  cursor: pointer;
}
.category__row {
  display: flex;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
}
.category__item {
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.category__icon {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
  img {
    width: 100%;
  }
}
.category__name {
  font-size: 14px;
  line-height: 9px;
}
@media (max-width: 991px) {
  .category__icon {
    width: 70px;
    height: 70px;
  }
  .category__title {
    font-size: 14px;
    line-height: 16px;
  }
}
@media (max-width:567px) {
   .category__icon {
    width: 50px;
    height: 50px;
  }
  .category__title {
     display: none;
    font-size: 11px;
    line-height: 12px;
  }
}
</style>