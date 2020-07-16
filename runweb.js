let  exec = require('child_process').execSync; 
let fs=require('fs')

runCmd('yarn build')
fs.exists('./www',(exist)=>{
    if(exist){
        runCmd('rm -r ./www/*')
    }else{
        runCmd('mkdir www')
    }
})
setTimeout(()=>runCmd('cp -r ./dist/* www'),500)


function runCmd(cmd){
    exec(cmd,(err,stdOut,stdErr)=>{
        console.log(stdOut,err,stdErr);
    })
}
