<!--
 * @Author: 代强
 * @Date: 2020-08-13 22:24:04
 * @LastEditTime: 2020-08-16 01:08:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ClothesManagerAPP/src/components/MainComponent/MainComponent.vue
-->
<template>
    <div id='main-component'>
        <Weather/>
        <ClothChoser :clothClass="'上装'"/>
        <ClothChoser :clothClass="'下装'"/>
        <ClothChoser :clothClass="'鞋子'"/>
    </div>
</template>

<script>
import "./css/MainComponent.scss"
import Weather from "./Weather/Weather";
import ClothChoser from "./ClothChoser/ClothChoser"
export default {
    name:'MainComponent',
    data(){
        return{
            weatherObject:null
        }
    },
    components:{Weather,ClothChoser},
  
}
</script>

<style lang="scss">

</style>