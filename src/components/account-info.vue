<template>
  <div class="account">
    <div class="account__photo">
      <img src="@/assets/icons/person.svg" alt="foto" />
    </div>
    <ul class="account__info">
      <li
        v-for="info in account"
        :key="info.id"
        class="account__info-item input input-div"
      >
        {{ info.value }}
      </li>
      <button class="account__theme input input-div">
        <router-link to="/Profil/Account/Theme">Илова мавзуси</router-link>
      </button>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["account"]),
  },
};
</script>

<style lang='scss'>
.account .input-div {
  &:nth-child(1)::before {
    background: url("@/assets/icons/account_black.svg") center / cover no-repeat;
  }
  &:nth-child(2)::before {
    background: url("@/assets/icons/tel.svg") center / cover no-repeat;
  }
  &:nth-child(3)::before {
    background: url("@/assets/icons/notebook.svg") center / cover no-repeat;
  }
  &:nth-child(4)::before {
    background: url("@/assets/icons/location.svg") center / cover no-repeat;
  }
  &:nth-child(5)::before {
    background: url("@/assets/icons/paint.svg") center / cover no-repeat;
  }
}
.account__info .account__info-item {
  padding: 20px 10px 18px 60px;
}
.account__photo {
  background: #2c3e50;
  height: 139px;
  width: 140px;
  border-radius: 50%;
  margin: 20px auto;
  img {
    width: 100%;
    height: 100%;
  }
}
.account__theme {
  display: block;
  a {
    color: #2c3e50;
  }
}
</style>