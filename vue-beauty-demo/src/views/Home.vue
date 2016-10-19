<template lang="html">
    <div class="m-address">
        <span class='margin-right-10'>当前位置: </span>
        <a v-link="{ name: 'home' }">首页</a>
    </div>
    <div class="ant-row margin-top-20">
        <v-input style='width:800px; display:inline-block; float: left;'
        placeholder='请输入' shape="circle" size='large'></v-input>
        <v-button style='display:inline-block; float: left; margin-left: 15px;' class="m-search-btn"
        type="primary" icon="search" size="large" @click='Search'><span>搜索</span></v-button>
    </div>
    <div class="ant-row margin-top-20">
        <span class="verial-align-middle margin-right-10">请选择时间周期</span>
        <v-datepicker class="w200 verial-align-middle" format="YYYY-MM-DD" size="large"></v-datepicker>
        <span class="verial-align-middle margin-left-10 margin-right-10">至</span>
        <v-datepicker class="w200 verial-align-middle" format="YYYY-MM-DD" size="large"></v-datepicker>
    </div>
    <div class="ant-row m-chart margin-top-20">
        <div class="chart-title margin-bottom-30">
            <p class='text-lg'>
                从
                <span>2012-12-12</span>
                截止到
                <span>2012-12-13</span>
                项目资金流水
                <span>10000</span>
                元 交易单数
                <span>5000</span>
                单
            </p>

        </div>
        <div class="chart-item">
            <chart :options="option"></chart>
        </div>
    </div>
</template>

<script>
import ECharts from 'vue-echarts/src/components/ECharts.vue'
Vue.component('chart', ECharts)

export default {
    data() {
        return {
            option: {
                title:
                    {
                        text: '交易单数'
                    },
                    tooltip : {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['成交单数']
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            boundaryGap : false,
                            data : ['周一','周二','周三','周四','周五','周六','周日']
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value'
                        }
                    ],
                    series : [
                        {
                            name:'成交单数',
                            type:'line',
                            stack: '总量',
                            areaStyle: {normal: {}},
                            data:[120, 132, 101, 134, 90, 230, 210]
                        }
                    ]
            }
        }
    },
    methods: {
        Search() {
            alert('正在搜索!')
        }
    }
}

</script>

<style lang="less">
.w200{
    width: 200px;
}
.verial-align-middle {
    vertical-align: middle;
}
.m-address {
    font-size: 14px;
}

.m-search-btn {
    width: 95px;
}

.chart-item {
    margin-top: 20px;
    .echarts {
        width: 100%;
    }
}
</style>
