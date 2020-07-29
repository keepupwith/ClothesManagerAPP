<template>
    <div id='single-cloth'  >
        <img
        id="cloth-image" 
        :style="{boxShadow:'0 0 5px 0.1px '+clothObject.color}"
        :src="'data:text/html;base64,'+this.imageBase64" alt="IMG"/>
    </div>
</template>

<script>
import {Cloth,ClothesStorageHandle} from "../../../Utils/clothesStorage"
import "./SingleCloth.scss"
export default {
    name:'SingleCloth',
    props:['clothObject'],
    data(){
        return {
            imageBase64:null
        }
    },
    created(){
         this.$store.state.clothesStorageHandle.getClothBase64(this.clothObject.clothID).then((base64)=>{
             this.imageBase64=base64;
         });
    },
    computed:{
        
    }
}
</script>

<style>

</style>