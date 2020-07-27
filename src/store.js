import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
import {Cloth,ClothesStorageHandle} from "./Utils/clothesStorage"
const store = new Vuex.Store({
  state: {
      clothesStorageHandle:null,
      clothesObjectList:[]
  },
  mutations: {
      
  },
  actions:{
    async loadClothStorage(context){
        let state=context.state;
        state.clothesStorageHandle=new ClothesStorageHandle();
        state.clothesObjectList=await this.state.clothesStorageHandle.getClothesList();
    }
  }
})

export default store;