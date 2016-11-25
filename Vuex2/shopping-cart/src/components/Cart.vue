
<style lang="scss" scoped>
.cart-footer {
  position: fixed;
  width: 100%;
  left: 0;
  height: 50px;
  background-color: #3d3d3f;
  opacity: 0.95;
  bottom: 0;
  z-index: 11;
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
      width: 16px;
      height: 16px;
      display: block;
      position: absolute;
      background-color: #ff461d;
      border-radius: 50%;
      right: -6px;
      top: -8px;
      text-align: center;
      color: #fff;
      line-height: 16px;
      font-size: 12px;
      border: none;
    }
    box-shadow: 0 -2px 1px 0 rgba(0, 0, 0, .1);
    position: absolute;
    left: 20px;
    bottom: 10px;
    width: 56px;
    height: 56px;
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
  .cart-price {
    padding-left: 90px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
    color: #fff;
  }
}


.shake {
  animation: pulse .5s .1s ease both;
}

@keyframes pulse {
  0%{ transform:scale(1) }
  50%{ transform:scale(1.2) }
  100%{ transform:scale(1) }
}

.cart-mask {
  // display: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: .4;
  z-index: 10;
}

.cart-body {
  // display: none;
  position: fixed;
  bottom: 50px;
  left: 0;
  width: 100%;
  z-index: 11;
  .cart-header {
    padding: 0 10px;
    height: 50px;
    line-height: 50px;
    background-color: #eceff1;
    .cart-text {
      font-size: 16px;
      color: #666;
      padding-left: 10px;
      border-left: 3px solid #3190e8;
    }
  }
}
.cart-list {
  .cart-item {
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    background-color: #fff;
    height: 50px;
    line-height: 50px;
    padding: 0 10px;
    h3 {
      flex: 7;
      float: left;
      font-size: 14px;
      font-weight: 700;
    }
    p {
      flex: 2;
      font-size: 14px;
      float: left;
      color: #ff461d;
      font-weight: 700;
    }
    .cart-num {
      width: 64px;
      height: 20px;
      margin-top: 15px;
      float: right;
      & > span {
        display: block;
        width: 20px;
        height: 20px;
        // float: left;
        text-align: center;
        line-height: 20px;
        border-radius: 50%;
        border: 1px solid #3190e8;
        box-sizing: border-box;
      }
    }
    .cart-minus {
      float: left;
    }
    .cart-count {
      font-size: 16px;
      margin: 0 2px;
      float: left;
    }
    .cart-add {
      float: right;
    }
  }
}

</style>
<template lang="html">
  <div class="container">
    <div v-if="selectedNum == 1" class="cart-view">
      <div v-if="isShowCart" @click="isShowCart = !isShowCart"  class="cart-mask"></div>
      <div v-if="isShowCart" class="cart-body">
        <div class="cart-header">
          <span class="cart-text">购物车</span>
        </div>
        <ul class="cart-list">
          <li class="cart-item" v-if="item.foodCount > 0" v-for="item in cart">
            <h3>{{ item.name }}</h3>
            <p>{{ item.foodPrice*item.foodCount | currency }}</p>
            <div class="cart-num">
              <span class="cart-minus" @click="minusToCart(item)">
                <i class='icon-minus iconfont'></i>
              </span>
              <span class="cart-count" style="border: none;">{{ item.foodCount }}</span>
              <span class="cart-add" @click="addToCart(item)">
                <i class='icon-add iconfont'></i>
              </span>
            </div>
          </li>
        </ul>
      </div>
      <div class="cart-footer">
        <div @click="showCart" class="cart-icon" :class="{ empty: cartNum == 0, shake: isShake }">
          <p class="number-badge">{{ cartNum }}</p>
        </div>
        <p class="cart-price">
          {{ totalPrice | currency }}
        </p>
        <a href="#" class="submitbutton" :class="{ disabled: cartNum == 0 }">结算</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { addToCart, minusToCart } from '../vuex/actions'

export default {
  data () {
    return {
      isShake: false,
      isShowCart: false
    }
  },
  props: ['selectedNum'],
  methods: {
    ...mapActions(['addToCart']),
    ...mapActions(['minusToCart']),
    showCart () {
      // console.log(this.cartNum)
      if (this.cartNum == 0) {
        return
      }
      this.isShowCart = !this.isShowCart
    }
  },
  computed: {
    ...mapGetters({
      cart: 'getCart'
    }),
    cartNum () {
      return this.cart.reduce((total, p) => {
        return total + p.foodCount
      }, 0);
    },
    totalPrice () {
      return this.cart.reduce((total, p) => {
        return total + p.foodCount * p.foodPrice
      }, 0)
    }
  },
  watch: {
    cartNum (newVal, oldVal) {
      var self = this;
      if (newVal > oldVal) {
        self.isShake = true
        setTimeout(function () {
          self.isShake = false
        }, 500)
      }

      if (newVal == 0) {
        self.isShowCart = false
      }

    }
  }
}

</script>
