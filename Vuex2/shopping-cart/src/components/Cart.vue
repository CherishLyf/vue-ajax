
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
        <div class="cart-icon empty">

        </div>
        <a href="#" class="submitbutton disabled">去结算</a>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['selectedNum']
}

</script>
