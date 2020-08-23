/*
 * @Author: your name
 * @Date: 2020-08-13 22:24:04
 * @LastEditTime: 2020-08-23 19:53:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ClothesManagerAPP/src/Utils/historyHandle.js
 */
import {fileOperator} from "./fileOperator";

class HistoryHandle{
    constructor() {
        this.history=null;
        this.historyFileName="history.json";
        this.fileoperator=new fileOperator();
    }

    async _loadHistory(){
        if(this.history)
            return
        let history;
        try{
            
            history=JSON.parse(await this.fileoperator.fileRead(this.historyFileName));
           
        }catch(e){
            history={
                data:{
                }
            };
            console.log("create cloth history.json",e);
            await this.fileoperator.fileWrite(this.historyFileName,JSON.stringify(history));
        }
        this.history=history;
    }

    async getHistory(){
        await this._loadHistory();
        return this.history;
    }
    
    async addHistory(historyObject){
   
        await this._loadHistory();
        console.log('test',this.history);
        this.history[historyObject.unixTime]=historyObject;
        await this.fileoperator.fileWrite(this.historyFileName,JSON.stringify(this.history));
    }

    async deleteHistory(historyID){
        await this._loadHistory();
        delete this.history.data[historyID];
        await this.fileoperator.fileWrite(this.historyFileName,JSON.stringify(this.history));
    }
}

class History{
    constructor(unixTime,clothIDList,weather){
        this.unixTime=unixTime;
        this.clothIDList=clothIDList;
        this.weather=weather;
    }
}
// class Condition{
//     constructor(weatherType,high,low,fengxiang,fengli,situation) {
//         this.weatherType=weatherType;
//         this.high=high;
//         this.low=low;
//         this.fengxiang=fengxiang;
//         this.fengli=fengli;
//         this.situation=situation;
//     }
// }

export {History,HistoryHandle};