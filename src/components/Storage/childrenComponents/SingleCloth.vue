<template>
    <div id='single-cloth'>
        <img :src="this.clothObject.imageBase64" alt="IMG"/>
    </div>
</template>

<script>
import {Cloth,ClothesStorageHandle} from "../../../Utils/clothesStorage"
export default {
    name:'SingleCloth',
    props:['clothObject'],
    data(){
        return {

        }
    },
    computed:{
        clothProps(){
            return this.clothObject.clothProps;
            // clothClass:clothClass,
            // clothSize:clothSize,
            // lastWash:lastWash,
            // suitTemp:suitTemp,
            // suitWeather:suitWeather,
            // clothID:new Date().getTime()
        }
    }
}
</script>

<style>

</style>