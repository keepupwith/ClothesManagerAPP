import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex);
import {Cloth,ClothesStorageHandle} from "./Utils/clothesStorage"
import {History,HistoryHandle} from "./Utils/historyHandle"
const store = new Vuex.Store({
  state: {
      clothesStorageHandle:new ClothesStorageHandle(),
      clothesObjectList:[],
      HistoryHandle:new HistoryHandle(),
      history:null
  },
  mutations: {
      
  },
  actions:{
    async loadClothStorage(context){
        let state=context.state;
        state.clothesObjectList=await this.state.clothesStorageHandle.getClothesList();
        console.log('fuckkkkkkkkkkkkkkkk',state.clothesObjectList);
        
    },
    async flashClothStorage(context){
        let state=context.state;
        let dispatch=context.dispatch;
        setTimeout(()=>dispatch('loadClothStorage'),2000)
   
    },
    async loadHistory(context){
        let state=context.state;
        let dispatch=context.dispatch;
        state.history=await state.HistoryHandle.getHistory();
    },
    flashHistory(context){
        let state=context.state;
        let dispatch=context.dispatch;
        dispatch('loadHistory')
    }
  }
})

export default store;