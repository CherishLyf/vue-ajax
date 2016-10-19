<template>
    <div class="page-wrapper">
        <top-header></top-header>
        <router-view keep-alive></router-view>
    </div>

</template>

<script>
import TopHeader from './components/TopHeader'

export default {
    components: {
        TopHeader
    }
}

</script>

<style lang="less">

body {
    // background: #ececec;
}


</style>
