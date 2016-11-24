<template>
  <div class="container">
    <!-- <div class="page-title">Navbar</div> -->
    <mt-navbar class="page-part" v-model="selected">
      <!-- <mt-tab-item id="1"><p class="nav-item">全部商品</p></mt-tab-item>
      <mt-tab-item id="2"><p class="nav-item">评价</p></mt-tab-item>
      <mt-tab-item id="3"><p class="nav-item">商家</p></mt-tab-item> -->
      <mt-tab-item id="1">全部商品</mt-tab-item>
      <mt-tab-item id="2">评价</mt-tab-item>
      <mt-tab-item id="3">商家</mt-tab-item>
    </mt-navbar>
    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1">
        <!-- <mt-cell v-for="n in 10" title="tab-container 1"></mt-cell> -->
        <product-list></product-list>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">
        <mt-cell v-for="n in 2" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
      <mt-tab-container-item id="3">
        <mt-cell v-for="n in 3" title="tab-container 1"></mt-cell>
      </mt-tab-container-item>
    </mt-tab-container>
    <cart :selectedNum="selected"></cart>
  </div>
</template>

<script>
import ProductList from './ProductList.vue'
import Cart from './Cart.vue'

export default {
  data() {
    return {
      selected: '1'
    };
  },
  components: {
    ProductList,
    Cart
  }
};
</script>

<style lang="scss" scoped>
  .container {
    position: relative;
    // height: 100%;
  }
  .page-part {
    margin-bottom: 15px;
    .nav-item {
      font-size: 14px;
    }
  }

</style>
