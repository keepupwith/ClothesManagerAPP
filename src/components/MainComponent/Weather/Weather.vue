<!--
 * @Author: 代强
 * @Date: 2020-08-15 23:11:17
 * @LastEditTime: 2020-08-23 17:36:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ClothesManagerAPP/src/components/MainComponent/Weather/Weather.vue
-->
<template>
  <div id="weather">
    <div id="today" @click="showWeather">
      <div id="city">{{ this.city }}</div>

      <div id="day">
        {{ today?today.date.slice(0, -3):"" }}
      </div>
      <div id="week">
        {{today? today.date.slice(-3):""}}
      </div>

      <div id="type">{{ today?today.type :""}}</div>
      <div id="high">{{ today?today.high:"" }}</div>
      <div id="low">{{ today?today.low:"" }}</div>
      <div id="fengxiang">{{ today?today.fengxiang:""}}</div>
      <div id="fengli">{{ today?today.fengli.slice(9, -3):""}}</div>
    </div>
  </div>
</template>

<script>
// import "./Weather.scss";
import getWeatherObject from "../../../Utils/weatherAPI";
import { Dialog } from "vant";
export default {
  name: "Weather",
  data() {
    return {
      city: null,
      weatherObject: null,
      today: null,
      nextDay: null,
      nextNextDay: null,
    };
  },
  beforeCreate() {},
  created() {
    this.getWeather();
  },
  methods: {
    async getUserCity() {
      this.city = "郑州";
      return "郑州";
    },
    async getWeather() {
      let weatherObject = await getWeatherObject(await this.getUserCity());
      console.log('tetsttest',weatherObject);
      this.weatherObject=weatherObject;
      this.today = weatherObject.data.forecast[0];
      this.nextDay = weatherObject.data.forecast[1];
      this.nextNextDay = weatherObject.data.forecast[2];
    },
    showWeather() {
        let weatherMessage="";
        [this.today,this.nextDay,this.nextNextDay].map((day,index)=>{
            if(index===0)
                weatherMessage+="今天:\n"
            else if(index===1)
                weatherMessage+="明天:\n"
            else
                weatherMessage+="后天:\n"
            weatherMessage+=day.date+' '+day.type+' '+day.low.slice(3)+'~'+day.high.slice(3)+' '+day.fengxiang+' '+day.fengli.slice(9, -3)+"\n\n"
        })
      Dialog.alert({
        title: this.city+"天气",
        message: weatherMessage,
      })
    },
  },
};
</script>

<style lang="sass" scoped>
@import './Weather.scss'
</style>
