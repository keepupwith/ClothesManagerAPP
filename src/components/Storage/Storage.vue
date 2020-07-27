<template>
    <div id="storage">
        <div v-for="clothObject in this.clothObjectList" :key="clothObject.clothProps.clothID">
            <SingleCloth :clothObject="clothObject"/>
        </div>
        {{this.clothObjectList.length}}
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
            clothObjectList:[]
        }
    },
    created(){
        this.$store.dispatch('loadClothStorage').then(()=>{
            this.clothesObjectList=this.$store.state.clothesObjectList;
        })
    }
}
</script>

<style>

</style>