import {fileOperator} from "./fileOperator";

class ClothesStorageHandle {

    constructor() {
        this.dataPath="data";
        this.clothesDataFileName="clothesData.json";
        this.clothData=-1;
        this.firstRun=this.firstRun.bind(this);
        this.addCloth=this.addCloth.bind(this);
        this._readClothData=this._readClothData.bind(this);
        this.getClothesList=this.getClothesList.bind(this);
        this.fileoperator=new fileOperator();
    }

    async firstRun(){
            await this.fileoperator.mkdir(this.dataPath);
            let creatDataContent={
                data:{

                }
            }
            await this.fileoperator.fileWrite(this.clothesDataFileName,JSON.stringify(creatDataContent));
        }
    
    async _readClothData(){
        this.clothData =JSON.parse(await this.fileoperator.fileRead(this.clothesDataFileName));
    }

    async addCloth(cloth){
        if(await this.fileoperator.readdir(this.dataPath)==='error')
            await this.firstRun()
        this.clothProps=cloth.clothProps;
        let clothData=JSON.parse(await this.fileoperator.fileRead(this.clothesDataFileName));
        clothData.data[this.clothProps.clothID]=this.clothProps;
        await this.fileoperator.fileWrite(this.clothesDataFileName,JSON.stringify(clothData));
        await cloth.saveImageBase64(cloth.imageBase64);
    }

    async getClothesList(){
        if(await this.fileoperator.readdir(this.dataPath)==='error')
            await this.firstRun()
        if(this.clothData===-1)
            await this._readClothData();
        let clothListAll=[]
        for(let cloth in this.clothData.data)
            clothListAll.push(this.clothData.data[cloth])
       
        return clothListAll;
    }

    async getClothBase64(clothID){
        if(await this.fileoperator.readdir(this.dataPath)==='error')
            await this.firstRun()
        try{
            let base64 =await this.fileoperator.fileRead(clothID+".base64");
            return base64;
        }catch(e){
            console.log("can read "+clothID+".base64",e)
        }
    }
    

}
class Cloth{
    constructor(clothClass,clothSize,color,lastWash,suitTemp,suitWeather,suitSituation,imageBase64){
        this.dataPath="data";
        this.clothDataFileName="clothesData.json";
        this.clothImageFileName="clothesImage.json";
        this.imageBase64=imageBase64;
        this.saveImageBase64=this.saveImageBase64.bind(this);
        this.clothProps={
            clothClass:clothClass,
            clothSize:clothSize,
            lastWash:lastWash,
            suitTemp:suitTemp,
            suitWeather:suitWeather,
            suitSituation:suitSituation,
            color:color,
            clothID:new Date().getTime()
        };
    }

   saveImageBase64(base64){
        let fileoperator=new fileOperator();
        fileoperator.fileWrite(this.clothProps.clothID+".base64",base64);
    }
}

export {Cloth,ClothesStorageHandle};