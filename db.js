const fs = require('fs');
const dirname=__dirname+"\\database";
const db=module.exports={};
!fs.existsSync(dirname) && fs.mkdirSync(dirname);
db.data=(str)=>{
    file=dirname+"\\"+str.split(".")[0]+".db";
    let splits = str.replace(str.split(".")[0]+".","").split(".");
    let DBs=JSON.parse(fs.readFileSync(file).toString());
    splits.forEach(l => {
        DBs = DBs[l];
    });
    return DBs;
}
db.del=(str)=>{
    const file=dirname+"\\"+str.split(".")[0]+".db";
    dbVAR1=JSON.parse(fs.readFileSync(file).toString());
        let tttis="";
        for(let i=1;i<str.split(".").length;i++){
            tttis=tttis+"."+str.split(".")[i];
        }
        if(tttis!=""){
            eval(`delete dbVAR1${tttis}`);
            fs.writeFile(file, JSON.stringify(dbVAR1), 'utf8', function(error){});
        }
        else{
            fs.unlink(file,()=>{});
        }
}
db.add=(str,str2)=>{
    const file=dirname+"\\"+str.split(".")[0]+".db";
    try{
        //파일이 있을때
        dbVAR1=JSON.parse(fs.readFileSync(file).toString());
        let tttis="";
        for(let i=1;i<str.split(".").length;i++){
            tttis=tttis+"."+str.split(".")[i];
        }
        let tttis2="";
        for(let i=1;i<str.split(".").length-1;i++){
            tttis2=tttis2+"."+str.split(".")[i];
        }
        if(eval(`typeof dbVAR1${tttis2} == "string"`)){
            eval(`dbVAR1${tttis2}={}`);
        }
        eval(`dbVAR1${tttis}="${str2}"`);
        fs.writeFile(file, JSON.stringify(dbVAR1), 'utf8', function(error){});
    }
    catch(err){
        //파일이 없을때
        dbVAR1={};
        let tttis="";
        for(let i=1;i<str.split(".").length;i++){
            tttis=tttis+"."+str.split(".")[i];
        }
        eval(`dbVAR1${tttis}="${str2}"`);
        fs.appendFile(file,JSON.stringify(dbVAR1),()=>{});
    }
}
