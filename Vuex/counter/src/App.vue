<template>
    <display></display>
    <increment></increment>
</template>

<script>
import Display from './components/Display.vue'
import Increment from './components/Increment.vue'
import store from './vuex/store'

export default {
    components: {
        Display,
        Increment
    },
    store
}
</script>

<style>

</style>
