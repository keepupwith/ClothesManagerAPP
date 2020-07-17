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
export default {
    name:'PlusMenu',
    data(){
        return {

        }
    },
    methods:{
        submenuClicked(id){
            this.$emit('submenuClicked');
            switch(id){
                case(0):
                    this.takePhoto();
                    break;
                

            }
        },
        takePhoto(){
            console.log('take photo');
        },

    }
}
</script>

<style>

</style>