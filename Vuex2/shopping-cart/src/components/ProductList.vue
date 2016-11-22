<style lang="scss" scoped>
.container {
  position: relative;
  height: 100%;
}
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
  position: relative;

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
    color: #C0CCDA;
    font-weight: normal;
  }
  .product-price {
    margin-top: 10px;
    font-weight: 700;
    font-size: 16px;
    color: #f60;
  }
  .product-number {
    position: absolute;
    width: 64px;
    height: 20px;
    right: 10px;
    bottom: 10px;
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
  .product-minus {
    float: left;
  }
  .product-count {
    font-size: 16px;
    margin: 0 2px;
    float: left
  }
  .product-add {
    float: right;
  }
}

// 购物车

.cart-footer {
  position: fixed;
  width: 100%;
  left: 0;
  height: 50px;
  background-color: #3d3d3f;
  opacity: 0.95;
  bottom: 0;
}
</style>

<template lang="html">
  <div class="container">
    <ul class="products-list">
      <li class="product-item" v-for="(item, index) in products">
        <div class="product-left">
          <img class="product-preview" :src="item.foodImg" alt="">
        </div>
        <div class="product-right">
          <h3 class="product-title">{{ item.name }}</h3>
          <h4 class="product-subTitle">月售{{ item.monthSale }}份</h4>
          <p class="product-price">￥{{ item.foodPrice }}</p>
          <div class="product-number">
            <span class="product-minus" @click="minusCount(index)" v-if="item.foodCount > 0">
              <i class='icon-minus iconfont'></i>
            </span>
            <span class="product-count" v-if="item.foodCount > 0" style="border: none;">{{ item.foodCount }}</span>
            <span class="product-add" @click="addCount(index)">
              <i class='icon-add iconfont'></i>
            </span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data () {
    return {
      products: [
        { foodImg: './static/logo.png', name: '黑暗料理', monthSale: 666, foodPrice: 66.66, foodCount: 0 }
      ]
    }
  },
  methods: {
    addCount (index) {
      var item = this.products[index];

      item.foodCount ++;
    },
    minusCount (index) {
      var item = this.products[index];

      item.foodCount --;

      if (item.foodCount == 0) {
        return
      }
    }
  }
}

</script>
