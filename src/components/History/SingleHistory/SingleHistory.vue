<!--
 * @Author: your name
 * @Date: 2020-08-16 22:06:34
 * @LastEditTime: 2020-08-16 22:27:49
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
      <div id="time">
          {{historyObject.unixTime}}
      </div>
      <div id="image">
          <div id="up-cloth">

          </div>
          <div id="down-cloth">

          </div>
          <div id="shoes-cloth">
              
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"SingleHistory",
    props:['historyObject'],
    data(){
        return {
            time:null
        }
    },
    methods:{

    },
    computed:{
    }
}
</script>

<style lang="scss" scoped>
@import "./SingleHistory.scss"
</style>