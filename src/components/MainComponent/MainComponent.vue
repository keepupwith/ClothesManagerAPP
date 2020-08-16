<!--
 * @Author: 代强
 * @Date: 2020-08-13 22:24:04
 * @LastEditTime: 2020-08-16 23:54:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ClothesManagerAPP/src/components/MainComponent/MainComponent.vue
-->
<template>
  <div id="main-component">
    <Weather ref="weather" />
    <div class="cloth-choser">
      <div class="cloth-class-span">上装</div>
      <ClothChoser :clothClass="'上装'" :onUserChoseCloth="onUserChoseCloth" />
    </div>
    <div class="cloth-choser">
      <div class="cloth-class-span">下装</div>
      <ClothChoser :clothClass="'下装'"  :onUserChoseCloth="onUserChoseCloth"/>
    </div>
    <div class="cloth-choser">
      <div class="cloth-class-span">鞋子</div>
      <ClothChoser :clothClass="'鞋子'" :onUserChoseCloth="onUserChoseCloth" />
    </div>
    <div
      id="user-chose-button"
      :style="{ boxShadow:'0px 0px 20px 3px '+ btnShadowColor }"
      @click="onUserChoseButtonClicked"
    >
      <span>选定今日搭配</span>
    </div>
  </div>
</template>

<script>
import { getRandomInt } from "../../Utils/tools";
import Weather from "./Weather/Weather";
import ClothChoser from "./ClothChoser/ClothChoser";
import {History} from "../../Utils/historyHandle"
export default {
  name: "MainComponent",
  data() {
    return {
      btnShadowColor: "green",
      userChosedCloth:{}
    };
  },
  components: { Weather, ClothChoser },
  created() {
    setInterval(this.flashColor, 1000);
  },
  methods: {
    flashColor() {
      let color =
        "rgb(" +
        getRandomInt(0, 255) +
        "," +
        getRandomInt(0, 255) +
        "," +
        getRandomInt(0, 255) +
        ")";
      this.btnShadowColor = color;
    },
    onUserChoseCloth(clothClass,clothObject){
        this.userChosedCloth[clothClass]=clothObject;
    },
    async onUserChoseButtonClicked(){
        let historyHandle=this.$store.state.historyHandle;
        await historyHandle.addHistory(new History(new Date().getTime(),
        [this.userChosedCloth['上装'].clothID,this.userChosedCloth['下装'].clothID,this.userChosedCloth['鞋子'].clothID]
        ,this.$refs.weather.weatherObject.data.forecast[0]))
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./css/MainComponent.scss";
</style>
