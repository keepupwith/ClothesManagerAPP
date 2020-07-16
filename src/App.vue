<template>
    <div id="app">
        <div id="content-view">
            <router-view></router-view>
        </div>
        <div id="bottomButtons">
            <van-tabbar v-model="active">
                <van-tabbar-item icon="home-o">标签</van-tabbar-item>
                <van-tabbar-item icon="search">标签</van-tabbar-item>
                <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
                <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
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
import "./App.scss";
import 'vant/lib/index.css';
Vue.use(VueRouter);
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {
    name: "App",
    components: {
        MainComponent,
        Storage
    },
    data(){
        return{
            active:0
        }
    },
    methods: {
        test() {
            this.$router.push("/Storage");
        }
    },
    watch:{
        active(newVal,oldVal){
            switch(newVal){
                case 0:
                    this.$router.push('/');
                    break;
                case 1:
                    this.$router.push('/Storage')
            }
        }
    }
};
</script>

<style lang="scss">
</style>