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
body {
  background: #fafafa;
  font-family:Tahoma,Arial,Roboto,'Droid Sans','Helvetica Neue','Droid Sans Fallback','Heiti SC',sans-self;
}
ul, li, h1, h2, h3, h4, h5, p {
  padding: 0;
  margin: 0;
}
li { list-style: none;}
/*@import './assets/reset.css';*/
</style>
