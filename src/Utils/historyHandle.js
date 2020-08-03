import {fileOperator} from "./fileOperator";

class HistoryHandle{
    constructor() {
        this.history=-1;
        this.historyFileName="history.json";
        this.fileoperator=new fileOperator();
    }

    async _loadHistory(){
        if(this.history!==-1)
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
            this.fileoperator.fileWrite(this.historyFileName,JSON.stringify(history));
        }
        this.history=history;
    }

    async getHistory(){
        await this._loadHistory();
        return this.history;
    }
    
    async addHistory(historyObject){
        await this._loadHistory()
        this.history.data[historyObject.unixTime]=historyObject;
        await this.fileoperator.fileWrite(this.historyFileName,JSON.stringify(this.history));
    }

    async deleteHistory(historyID){
        await this._loadHistory();
        delete this.history.data[historyID];
        await this.fileoperator.fileWrite(this.historyFileName,JSON.stringify(this.history));
    }
}

class History{
    constructor(unixTime,clothIDList,condition){
        this.unixTime=unixTime;
        this.clothIDList=clothIDList;
        this.condition=condition;
        this.props={unixTime,clothIDList,condition};
    }
}

export {History,HistoryHandle};