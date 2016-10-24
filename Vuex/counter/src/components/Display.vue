<template lang="html">
    <h3>Count is {{ counterValue }}</h3>
</template>

<script>
import { getCount } from '../vuex/getters'

export default {
    vuex: {
        getters: {
            // 这里需要 'getCount' 函数本身而不是它的执行结果 'getCount'
            counterValue: getCount
        }
    }
};

</script>

<style lang="css">
</style>
