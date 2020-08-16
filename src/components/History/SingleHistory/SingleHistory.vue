<!--
 * @Author: your name
 * @Date: 2020-08-16 22:06:34
 * @LastEditTime: 2020-08-16 23:40:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ClothesManagerAPP/src/components/History/SingleHistory/SingleHistory.vue
-->
<!--
 * @Author: 代强
 * @Date: 2020-08-16 22:06:34
 * @LastEditTime: 2020-08-16 22:13:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ClothesManagerAPP/src/components/History/SingleHistory/SingleHistory.vue
-->
<template>
  <div id="single-history">
    <div id="information">
      <div id="time">
        <div id="date">
          {{ new Date(historyObject.unixTime).toLocaleDateString() }}
        </div>
        <div id="clock">
          {{ new Date(historyObject.unixTime).toLocaleTimeString() }}
        </div>
      </div>
      <div id="weather">
        <div id="type">{{ historyObject.weather.type }}</div>
        <div id="high">{{ historyObject.weather.high }}</div>
        <div id="low">{{ historyObject.weather.low }}</div>
        <div id="fengxiang">{{ historyObject.weather.fengxiang }}</div>
        <div id="fengli">{{ historyObject.weather.fengli.slice(9, -3) }}</div>
      </div>
    </div>

    <div id="image">
      <div class="cloth-image">
        <img :src="'data:text/html;base64,' + upImageBase64" />
      </div>
      <div class="cloth-image">
        <img :src="'data:text/html;base64,' + downImageBase64" />
      </div>
      <div class="cloth-image">
        <img :src="'data:text/html;base64,' + shoesImageBase64" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleHistory",
  props: ["historyObject"],
  data() {
    return {
      time: null,
      upImageBase64: null,
      downImageBase64: null,
      shoesImageBase64: null,
    };
  },
  created() {
    this.loadImage();
  },
  methods: {
    async loadImage() {
      this.upImageBase64 = await this.clothesStorageHandle.getClothBase64(
        this.historyObject.clothIDList[0]
      );
      this.downImageBase64 = await this.clothesStorageHandle.getClothBase64(
        this.historyObject.clothIDList[1]
      );
      this.shoesImageBase64 = await this.clothesStorageHandle.getClothBase64(
        this.historyObject.clothIDList[2]
      );
    },
  },
  computed: {
    clothesStorageHandle() {
      return this.$store.state.clothesStorageHandle;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./SingleHistory.scss";
</style>
