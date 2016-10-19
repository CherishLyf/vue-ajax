<template lang="html">
    <div class="main-wrapper">
        <div class="ant-row">
            <div class="ant-col-xs-24 ant-col-sm-24 ant-col-md-6 ant-col-lg-4">
                <v-menu mode='inline' class="aside-container">
                    <menu-item v-link="{ name: 'home', activeClass: 'ant-menu-item-selected' }">
                        项目管理
                    </menu-item>
                    <sub-menu title='银行管理'>
                        <menu-item v-link="{ name: 'home', activeClass: 'ant-menu-item-selected' }">支行管理</menu-item>
                    </sub-menu>
                </v-menu>
            </div>
            <div class="main-container ant-col-xs-24 ant-col-sm-24 ant-col-md-18 ant-col-lg-20">
                 <router-view keep-alive></router-view>
            </div>
        </div>
    </div>
</template>

<script>

import vMenu from '../../components/menu'
let menuItem = vMenu.Item
let subMenu = vMenu.subMenu

export default {
    components: {
        vMenu,
        menuItem,
        subMenu
    }
}
</script>

<style lang="less">
    .main-wrapper {
        width: 96%;
        margin: 0 auto;
        padding: 24px 0 0;
        margin-bottom: 24px;
        background-color: #fff;
        overflow: hidden;
        position: relative;
    }
    .main-container {
        padding: 0 4% 120px 4%;
        margin-left: -1px;
        min-height: 850px;
        border-left: 1px solid #e9e9e9;
    }
    .aside-container {
        padding-bottom: 50px;
    }
    .aside-container .ant-menu-item a, .aside-container .ant-menu-submenu-title span, .aside-container>.ant-menu-item {
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
    }
</style>
