<template>
  <products></products>
</template>

<script>
import Products from './components/Products.vue'

export default {
  name: 'app',
  components: {
    Products
  }
}
</script>

<style>
@import './assets/fonts/iconfont.css';
@import './assets/reset.css';
body {
  background: #fafafa;
  font-family:Tahoma,Arial,Roboto,'Droid Sans','Helvetica Neue','Droid Sans Fallback','Heiti SC',sans-self;
}
html,body {
  position: relative;
  height: 100%;
}

</style>
