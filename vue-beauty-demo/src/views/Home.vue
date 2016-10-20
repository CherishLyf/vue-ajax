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
        <div class="chart-item ant-row">
            <chart :options="option"></chart>
        </div>
    </div>
    <div class="ant-row m-bank-list">
        <div class="list-title ant-row">
            <h3>项目列表</h3>
            <span>签约项目10000家</span>
            <v-button @click="openNewDialog" class="add-project" icon='plus' type="primary" size="large">
                新建项目
            </v-button>
        </div>
        <div class="ant-row list-body">
            <div class="list-item ant-row">
                <h3 class="ant-col-md-6">鹤壁农商银行</h3>
                <h4 class="ant-col-md-12">
                    <span class="ant-col-md-8">交易流水 10000</span>
                    <span class="ant-col-md-8">交易流水 10000</span>
                    <span class="ant-col-md-8">交易流水 10000</span>
                </h4>
                <p class="ant-col-md-6 ">
                    <v-button type="primary" size="large">查看</v-button>
                    <v-button type="default" size="large">设置</v-button>
                    <v-button type="error" size="large">下线</v-button>
                </p>
            </div>
            <div class="list-item ant-row">
                <h3 class="ant-col-md-6">鹤壁农商银行</h3>
                <h4 class="ant-col-md-12">
                    <span class="ant-col-md-8">交易流水 10000</span>
                    <span class="ant-col-md-8">交易流水 10000</span>
                    <span class="ant-col-md-8">交易流水 10000</span>
                </h4>
                <p class="ant-col-md-6 ">
                    <v-button type="primary" size="large">查看</v-button>
                    <v-button type="default" size="large">设置</v-button>
                    <v-button type="success" size="large">上线</v-button>
                </p>
            </div>
        </div>
        <div class="list-bottom">
            <v-pagination class='fr' :default-current="1" :show-quick-jumper="true" :total="20"></v-pagination>
        </div>
    </div>
    <v-modal title="新建项目" :modal-width='700'  :visible="visible"
             :on-ok="addNewProject" :on-cancel="closeNewDialog" ok-text="创建" cancel-text="取消">
        <p>对话框的内容</p>
        <p>对话框的内容</p>
        <p>对话框的内容</p>
    </v-modal>

</template>

<script>
import ECharts from 'vue-echarts/src/components/ECharts.vue'
Vue.component('chart', ECharts)

export default {
    data() {
        return {
            visible: false,
            option: {
                title:{
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
        Search() {     // 搜索框
            alert('正在搜索!')
        },
        openNewDialog() {
            this.visible = true
        },
        addNewProject() {
            this.visible = false
            console.log('确认创建!')
        },
        closeNewDialog() {
            this.visible = false
        }
    }
}

</script>

<style lang="less">
.w200{
    width: 200px;
}
.fl {
    float: left;
}
.fr{
    float: right;
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
        height: 400px;
    }
}

.m-bank-list {
    margin-top: 50px;
    .list-title {
        vertical-align: text-bottom;
        height: 36px;
        h3 {
            float: left;
            font-size: 24px;
            vertical-align: text-bottom;
        }
        span {
            display: block;
            margin-top: 10px;
            float: left;
            font-size: 16px;
            margin-left: 40px;
            vertical-align: text-bottom;
        }
    }
    .add-project {
        float: right;
        margin-right: 10px;
        margin-top: 2px;
    }
    .list-bottom {
        margin-top: 10px;
    }
    .list-body {
        margin-top: 10px;
    }
    .list-item {
        height: 50px;
        // background-color: #eee;
        margin-bottom: 10px;
        border: 1px solid #eee;
        h3 {
            line-height: 50px;
            text-align: center;
            font-size: 20px;
        }
        h4 {
            line-height: 50px;
            text-align: center;
            font-size: 12px;
            font-weight: normal;
        }
        p {
            // vertical-align: middle;
            text-align: center;
            button {

                margin: 9px 5px;
            }
        }
    }
}
</style>
