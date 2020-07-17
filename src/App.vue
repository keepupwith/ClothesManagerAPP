<template>
    <div id="app">
        <van-nav-bar
            :title="title"
            right-text="按钮"
            @click-right="changePlusmenuStatus"
        />
        <transition name="fade">
        <PlusMenu v-show='plusMenuShow' @submenuClicked='changePlusmenuStatus'/>
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
import PlusMenu from "./components/PlusMenu/PlusMenu"
import "./App.scss";
import "vant/lib/index.css";
import { NavBar } from "vant";

Vue.use(NavBar);
Vue.use(VueRouter);
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    name: "App",
    components: {
        MainComponent,
        Storage,
        History,
        Settings,
        NavBar,
        PlusMenu
    },
    data() {
        return {
            active: 0,
            plusMenuShow:true
        };
    },
    methods: {
        changePlusmenuStatus(){
            this.plusMenuShow=!this.plusMenuShow;
        }
    },
    computed:{
        title(){
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
        }
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
        }
    }
};
</script>

<style lang="scss">
</style>