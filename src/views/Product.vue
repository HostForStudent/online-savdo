<template>
  <div class="product">
    <div class="container">
      <h2 class="product__title">
        <BackArrow />
        {{ product.name }}
      </h2>
      <div class="product__row">
        <div class="product__img">
          <img
            :src="require('@/assets/img/product/' + product.imgSrc)"
            :alt="product.name"
          />
        </div>
        <div class="product__descr">
          <h3 class="product__name">{{ product.name }}</h3>
          <em class="product__category">{{ product.category }}</em>
          <div class="product__price">{{ product.price }}</div>
          <div class="product__info">{{ product.info }}</div>
        </div>
      </div>
      <div class="container__add">
        <AddProduct :id="this.id" />
      </div>
      <Nav />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Nav from "@/components/Nav.vue";
import BackArrow from "@/components/back-arrow.vue";
import AddProduct from "@/components/add-product.vue";
export default {
  components: {
    AddProduct,
    BackArrow,
    Nav,
  },
  props: ["id"],
  computed: {
    ...mapState(["products"]),
    product() {
      return this.products[this.id];
    },
  },
};
</script>

<style lang='scss'>
.product {
  position: relative;
  font-weight: 600;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 80px;
  & > .container {
    padding: 0;
  }
}
.container__add {
  padding: 0 10px;
}
.product__title {
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 20px;
  display: inline-block;
}
.product__row {
  max-width: 568px;
  margin: 0 auto;
}
@media (max-width: 568px) {
  .product__title {
    position: absolute;
    top: 20px;
    z-index: 3;
    width: 100%;
    left: 50%;
    transform: translate(-50%);
  }
}
.product__arrow {
  position: absolute;
  left: 20px;
  top: 0px;
}
.product__img {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 25px;
  img {
    width: 100%;
    height: auto;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 255, 255);
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.6132197005025457) 0%,
      rgba(0, 0, 0, 0) 50%,
      rgba(255, 255, 255, 0.6722084645474895) 100%
    );
  }
}
.product__descr {
  text-align: left;
  padding: 0 30px;
  font-size: 14px;
}
.product__name {
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 4px;
  font-weight: 700;
}
.product__category {
  font-weight: 500;
  font-size: 14px;
  line-height: 19px;
  color: #939eb4;
}
.product__price {
  margin-top: 10px;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin-bottom: 18px;
}
.product__info {
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #64697e;
  margin-bottom: 20px;
}
@media (min-width: 569px) {
  .product {
    padding-top: 20px;
  }
  .product__row {
    max-width: 1100px;
    padding-left: 30px;
    display: flex;
    align-items: stretch;
    justify-content: center;
  }
  .product__img {
    max-width: 360px;
    flex: 1 1 auto;
  }
  .product__name {
    font-size: 26px;
  }
  .product__title {
    position: relative;
    margin-bottom: 20px;
    font-size: 28px;
  }
  .product__arrow {
    position: absolute;
    left: -100px;
  }
}
@media (min-width: 768px) {
  .product {
    padding-top: 30px;
  }
  .product__row {
    padding-left: 30px;
  }
  .product__name {
    font-size: 26px;
  }
  .product__category {
    font-size: 20px;
    line-height: 29px;
  }
  .product__info {
    font-size: 18px;
    line-height: 26px;
  }
  .product__title {
    margin-bottom: 40px;
    font-size: 38px;
  }
  .product__arrow {
    left: -150px;
  }
}
</style>