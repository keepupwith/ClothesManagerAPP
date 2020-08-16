<!--
 * @Author: your name
 * @Date: 2020-08-16 00:31:34
 * @LastEditTime: 2020-08-16 13:29:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ClothesManagerAPP/src/components/MainComponent/ClothChoser/ClothChoser.vue
-->
<template>
  <div>
    <SingleCloth
      :clothObject="clothObjectList[chosedIndex]"
      @click.native="onChoserClicked"
      @click.stop
    />

    <van-overlay :show="modalShow" @click="modalShow = false" :lock-scroll="false">
      <div class="cloth-list" >
        <SingleCloth
          v-for="(clothObject, i) in clothObjectList"
          :key="clothObject.clothID"
          :clothObject="clothObject"
          @click.native="()=>onChoserClicked(i)"
          @click.stop
        />
      </div>
    </van-overlay>
  </div>
</template>

<script>
import SingleCloth from "../../Storage/SingleCloth/SingleCloth";
import Vue from "vue";
import { Overlay } from "vant";

Vue.use(Overlay);
export default {
  name: "ClothChoser",
  props:['clothClass',"onUserChoseCloth"],
  components: { SingleCloth },
  data() {
    return {
      chosedIndex: 0,
      modalShow: false,
    };
  },
  mounted(){
      this.onUserChoseCloth(this.clothClass,this.clothObjectList[0])
  },
  methods: {
    onChoserClicked(clothIndex) {
        if(this.modalShow){
            this.chosedIndex=clothIndex;
            this.onUserChoseCloth(this.clothClass,this.clothObjectList[clothIndex])
        }else{
            this.modalShow = true;
        }
      
    },
  },
  computed: {
    clothObjectList() {
      return this.$store.state.clothesObjectList.filter(clothObject=>{
          return clothObject.clothClass===this.clothClass;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./ClothChoser.scss";
</style>
