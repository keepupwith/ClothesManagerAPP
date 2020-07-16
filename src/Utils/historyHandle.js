import {fileOperator} from "./fileOperator";

class historyHandle{
    constructor(params) {
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
    
    async addHistory(up,down,shoes,other){
        await this._loadHistory()
        this.history.data[new Date().getTime()]={up:up,down:down,shoes:shoes,other:other};
        await this.fileoperator.fileWrite(this.historyFileName,JSON.stringify(this.history));
    }

    async deleteHistory(historyID){
        await this._loadHistory();
        delete this.history.data[historyID];
        await this.fileoperator.fileWrite(this.historyFileName,JSON.stringify(this.history));
    }
}

export default historyHandle;