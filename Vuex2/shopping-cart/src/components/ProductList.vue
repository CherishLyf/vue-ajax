<style lang="scss" scoped>
.product-item {
  width: 100%;
  // height: 60px;
  background-color: #fff;
  padding: 10px 0;
  vertical-align: middle;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  box-shadow: 1px 1px 0 0 #ddd;

  .product-left {
    display: block;
    flex: 2;
    margin:0 15px;
  }
  .product-right {
    flex: 8;
  }
  .product-preview {
    width: 100%;
    height: auto;
    max-width: 100%;
    vertical-align: middle;
  }
  .product-title {
    line-height: 20px;
    font-size: 18px;
    font-weight: 700;
  }
  .product-subTitle {
    line-height: 30px;
    font-size: 14px;
    color: #ddd;
    font-weight: normal;
  }
  .product-price {
    margin-top: 10px;
    font-weight: 700;
    font-size: 16px;
    color: #f60;
  }
}
</style>

<template lang="html">
  <ul class="products-list">
    <li class="product-item">
      <div class="product-left">
        <img class="product-preview" src="../assets/logo.png" alt="">
      </div>
      <div class="product-right">
        <h3 class="product-title">黑暗料理</h3>
        <h4 class="product-subTitle">月售200份</h4>
        <p class="product-price">￥66.66</p>
      </div>
    </li>
  </ul>
</template>

<script>

export default {

}

</script>
