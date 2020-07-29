import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
import {Cloth,ClothesStorageHandle} from "./Utils/clothesStorage"
const store = new Vuex.Store({
  state: {
      clothesStorageHandle:new ClothesStorageHandle(),
      clothesObjectList:[],
      dirty:false
  },
  mutations: {
      
  },
  actions:{
    async loadClothStorage(context){
        let state=context.state;
        state.clothesObjectList=await this.state.clothesStorageHandle.getClothesList();
        
    },
    async flashClothStorage(context){
        console.log("reflashStart!");
        let state=context.state;
        let dispatch=context.dispatch;
        dispatch('loadClothStorage');
        console.log("reflash!");
    },
  }
})

export default store;