import {Plugins, FilesystemDirectory, FilesystemEncoding } from '@capacitor/core';
const {Filesystem} = Plugins;

class fileOperator{
    constructor(params) {
        
    }
    async fileWrite(filename,content) {
        try {
          const result = await Filesystem.writeFile({
            path: "data/"+filename,
            data: content,
            directory: FilesystemDirectory.External,
            encoding: FilesystemEncoding.UTF8
          })
          console.log("write",result);
        } catch(e) {
          console.error('Unable to write file', e);
        }
      }
      
      async fileRead(filename) {
        let contentsObj = await Filesystem.readFile({
          path: 'data/'+filename,
          directory: FilesystemDirectory.External,
          encoding: FilesystemEncoding.UTF8
        });
        console.log(contentsObj);
        return contentsObj.data
      }
      
      async fileAppend() {
        await Filesystem.appendFile({
          path: 'secrets/text.txt',
          data: "MORE TESTS",
          directory: FilesystemDirectory.External,
          encoding: FilesystemEncoding.UTF8
        });
      }
      
      async fileDelete() {
        await Filesystem.deleteFile({
          path: 'secrets/text.txt',
          directory: FilesystemDirectory.External
        });
      }
      
      async mkdir(dirname) {
        try {
          let ret = await Filesystem.mkdir({
            path: dirname,
            directory: FilesystemDirectory.External,
            recursive: false // like mkdir -p
          });
        } catch(e) {
          console.error('Unable to make directory', e);
        }
      }

      async rmdir() {
        try {
          let ret = await Filesystem.rmdir({
            path: 'secrets',
            directory: FilesystemDirectory.External,
            recursive: false,
          });
        } catch(e) {
          console.error('Unable to remove directory', e);
        }
      }
      
      async readdir(dirpath) {
        try {
          let ret = await Filesystem.readdir({
            path: dirpath,
            directory: FilesystemDirectory.External
          });
          return ret;
        } catch(e) {
          return "error";
        }

      }
      async readFilePath() {
        // Here's an example of reading a file with a full file path. Use this to
        // read binary data (base64 encoded) from plugins that return File URIs, such as
        // the Camera.
        try {
          let data = await Filesystem.readFile({
            path: 'file:///var/mobile/Containers/Data/Application/22A433FD-D82D-4989-8BE6-9FC49DEA20BB/Documents/text.txt'
          });
        } catch(e){
            console.log("readFilePathError"+e);
        }
      }
      

}
export {fileOperator};