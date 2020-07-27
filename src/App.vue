<template>
    <div id="app">
        <van-nav-bar :title="title" right-text="按钮" @click-right="changePlusmenuStatus" />
        <transition name="fade">
            <PlusMenu
                v-if="plusMenuShow"
                :changeAddClothPopupShow="changeAddClothPopupShow"
                @hidePlusMenu="changePlusmenuStatus"
            />
        </transition>
        <div id="content-view">
            <router-view></router-view>
        </div>
        <div id="bottomButtons">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="home-o">今日</van-tabbar-item>
                <van-tabbar-item icon="search">库存</van-tabbar-item>
                <van-tabbar-item icon="friends-o">历史</van-tabbar-item>
                <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
            </van-tabbar>
        </div>

        <van-popup
            v-model="addClothPopupShow"
            closeable
            round
            position="bottom"
            :style="{ height: '60%' }"
        >
            <div id="cloth-class">
                <span>分类</span>
                <van-radio-group v-model="newClothProps.clothClass" direction="horizontal">
                    <van-radio name="上装">上装</van-radio>
                    <van-radio name="下装">下装</van-radio>
                    <van-radio name="鞋子">鞋子</van-radio>
                </van-radio-group>
            </div>
            <div id="suit-weather">
                <span>适用天气</span>
                <van-checkbox-group v-model="newClothProps.suitWeather" direction="horizontal">
                    <van-checkbox shape="square" name="晴天">晴天</van-checkbox>
                    <van-checkbox shape="square" name="烈日">烈日</van-checkbox>
                    <van-checkbox shape="square" name="阴天">阴天</van-checkbox>
                    <van-checkbox shape="square" name="雨天">雨天</van-checkbox>
                    <van-checkbox shape="square" name="雾天">雾天</van-checkbox>
                    <van-checkbox shape="square" name="雪天">雪天</van-checkbox>
                </van-checkbox-group>
            </div>
            <div id="suit-temp">
                <span>适用温度</span>
                <van-stepper v-model="newClothProps.suitTemp" min="-10" max="40" />
            </div>
            <div id="suit-weather">
                <span>适用场合</span>
                <van-checkbox-group v-model="newClothProps.suitSituation" direction="horizontal">
                    <van-checkbox shape="square" name="学习">学习</van-checkbox>
                    <van-checkbox shape="square" name="工作">工作</van-checkbox>
                    <van-checkbox shape="square" name="会议">会议</van-checkbox>
                    <van-checkbox shape="square" name="运动">运动</van-checkbox>
                    <van-checkbox shape="square" name="休闲">休闲</van-checkbox>
                </van-checkbox-group>
            </div>
            <div id="last-wash">
                <span>上次洗涤距今 (天)</span>
                <van-stepper v-model="newClothProps.lastWash" min="0" max="1000" />
            </div>
        </van-popup>
    </div>
</template>

<script>
import VueRouter from "vue-router";
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
import MainComponent from "./components/MainComponent/MainComponent";
import Storage from "./components/Storage/Storage";
import History from "./components/History/History.vue";
import Settings from "./components/Settings/Settings.vue";
import PlusMenu from "./components/PlusMenu/PlusMenu";
import "./App.scss";
import "vant/lib/index.css";
import { NavBar } from "vant";
import { Stepper } from "vant";
import { DatetimePicker } from "vant";

Vue.use(DatetimePicker);
Vue.use(Stepper);

import { Cloth, ClothesStorageHandle } from "./Utils/clothesStorage";
import { RadioGroup, Radio } from "vant";
import { Checkbox, CheckboxGroup } from "vant";

Vue.use(Checkbox);
Vue.use(CheckboxGroup);
Vue.use(NavBar);
Vue.use(VueRouter);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Radio);
Vue.use(RadioGroup);
export default {
    name: "App",
    components: {
        MainComponent,
        Storage,
        History,
        Settings,
        NavBar,
        PlusMenu,
    },
    data() {
        return {
            active: 0,
            plusMenuShow: true,
            addClothPopupShow: true,
            newClothProps: {
                clothClass: null,
                clothSize: null,
                lastWash: null,
                suitTemp: 26,
                suitWeather: [],
                suitSituation: [],
                imageBase64: null,
            },
        };
    },
    methods: {
        changePlusmenuStatus(event) {
            this.plusMenuShow = !this.plusMenuShow;
        },
        changeAddClothPopupShow(base64) {
            this.addClothPopupShow = !this.addClothPopupShow;
        },
    },
    computed: {
        title() {
            switch (this.active) {
                case 0:
                    return "今日";
                case 1:
                    return "库存";
                case 2:
                    return "历史";
                case 3:
                    return "设置";
                default:
                    return "error";
            }
        },
    },
    watch: {
        active(newVal, oldVal) {
            switch (newVal) {
                case 0:
                    this.$router.push("/");
                    break;
                case 1:
                    this.$router.push("/Storage");
                    break;
                case 2:
                    this.$router.push("/History");
                    break;
                case 3:
                    this.$router.push("/Settings");
                    break;
            }
        },
    },
};
</script>

<style lang="scss">
</style>