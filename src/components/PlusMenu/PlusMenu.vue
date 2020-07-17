<template>
<div id='plus-menu'>
    <div class="submenu" @click="()=>submenuClicked(0)">拍照</div>
    <div class="submenu" @click="()=>submenuClicked(1)">拍照</div>
    <div class="submenu" @click="()=>submenuClicked(2)">拍照</div>
    <div class="submenu" @click="()=>submenuClicked(3)">拍照</div>
</div>
</template>

<script>
import './PlusMenu.scss'
import takePhoto from "../../Utils/takePhoto"
export default {
    name:'PlusMenu',
    data(){
        return {
            
        }
    },
    mounted(){
        document.addEventListener('mousedown',this.hidePlusMenu);
    },
    beforeDestroy(){
        document.removeEventListener('mousedown',this.hidePlusMenu);
    }
    ,
    methods:{
        submenuClicked(id){
            switch(id){
                case(0):
                    this.takePhoto();
                    break;
                

            }
            this.hidePlusMenu()
        },
        async takePhoto(){
            let base64=await takePhoto();
            console.log(base64);
        },
        hidePlusMenu(){
            this.$emit('submenuClicked');
        }
    }
}
</script>

<style>

</style>