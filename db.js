const fs = require('fs');
String.prototype.db=function(type,add){
    if(type!=undefined){type="main."+type;}
    !fs.existsSync("database") && fs.mkdirSync("database"); //database 폴더가 없으면 추가
    try{fs.readFileSync(__dirname+"\\"+'database\\'+this+".db").toString();}
    catch(err){
         fs.open(__dirname+"\\"+`database\\${this+".db"}`,'w',function(err,fd){
        });
    }
    strASDffdfS=__dirname.split("\\").join("\\\\")+"\\\\"+'database\\\\'+this+".db";
    eval(`DBstr=JSON.parse(fs.readFileSync(\`${strASDffdfS}\`).toString())`);
    if(DBstr==""){
         fs.writeFile(__dirname+"\\"+'database\\'+this+".db", "{\"main\":{}}", 'utf8', function(error){console.log(error)});
    }
    if(type==undefined){
        return fs.readFileSync(__dirname+"\\"+'database\\'+this+".db").toString();
    }
    else if(type.indexOf("add")!=-1){
        let file=type.replace(".add","");
        let y="";
        for(let i=0;i<file.split(".").length-1;i++){
            y=y+file.split(".")[i];
        }
         eval(`DBstr.${y}={}`);
         eval(`DBstr.${file} = '${add}'`);
        console.log(y);
    }
    else if(type.indexOf("set")!=-1){
        let file=type.replace(".set","");
         eval(`DBstr.${file}='${add}'`);
    }
    else if(type.indexOf("del")!=-1){
        let file=type.replace(".del","");
         eval(`delete DBstr.${file}`);
    }
    else{
        return eval(`DBstr.${type}`);
    }
    fs.writeFile(__dirname+"\\"+`database\\${this+".db"}`, JSON.stringify(DBstr), 'utf8', function(error){console.log(error)});
}
console.log("ex".db("aa"));
