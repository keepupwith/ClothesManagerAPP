<template>
    <div id="storage">
        <div v-for="clothObject in this.clothObjectList" :key="clothObject.clothID">
            <SingleCloth :clothObject="clothObject"/>
        </div>
      
    </div>
</template>

<script>
import "./css/Storage.scss"
import SingleCloth from "./childrenComponents/SingleCloth";
import {Cloth,ClothesStorageHandle} from "../../Utils/clothesStorage"
export default {
    name:'Storage',
    components:{SingleCloth},
    data(){
        return {
        
        }
    },
    created(){
        this.$store.dispatch('loadClothStorage').then(()=>{
            this.clothesObjectList=this.$store.state.clothesObjectList;
        });
        
    },
    computed:{
        clothObjectList(){
            return this.$store.state.clothesObjectList;
        }
    },
    watch:{
        clothObjectList(newVal){
            
        }
      
    }
}
</script>

<style>

</style>