
<style lang="scss" scoped>
.cart-footer {
  position: fixed;
  width: 100%;
  left: 0;
  height: 50px;
  background-color: #3d3d3f;
  opacity: 0.95;
  bottom: 0;
  .cart-icon {
    &.empty {
      background-image: radial-gradient(circle,#363636 60px,#444 0);
      &:before {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: url('/static/cart-icon.png') no-repeat center;
        background-size: 35px auto;
        content: '';
      }
    }
    &:before {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: url('/static/cart-icon1.png') no-repeat center;
      background-size: 35px auto;
      content: '';
    }
    .number-badge {
      width: 15px;
      height: 15px;
      display: block;
      position: absolute;
      background-color: #ff461d;
      border-radius: 50%;
      right: -5px;
      top: -7px;
      text-align: center;
      color: #fff;
      line-height: 15px;
      font-size: 10px;
    }
    position: absolute;
    left: 20px;
    bottom: 10px;
    width: 60px;
    height: 60px;
    box-sizing: border-box;
    border-radius: 50%;
    border: 4px solid #444;
    background-color: #3190e8;
  }
  .submitbutton {
    display: block;
    position: absolute;
    top: 0;
    width: 25%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    right: 0;
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    background-color: #4cd964;
    &.disabled {
      background-color: #535356;
    }
  }
}
</style>
<template lang="html">
  <div class="container">
    <div v-if="selectedNum == 1" class="cart-view">
      <div class="cart-footer">
        <div class="cart-icon" :class="{ empty: cartNum == 0 }">
          <p class="number-badge">{{ cartNum }}</p>
        </div>
        <a href="#" class="submitbutton" :class="{ disabled: cartNum == 0 }">去结算</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['selectedNum'],
  computed: {
    ...mapGetters({
      cart: 'getCart'
    }),
    cartNum () {
      return this.cart.reduce((total, p) => {
        return total + p.foodCount
      }, 0)
    }
  }
}

</script>
