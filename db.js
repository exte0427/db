const fs=require(`fs`);
function db(str,type,put){
    if(type=="delet"){
        fs.unlink(`${str}.db`, function (err) {});
    }
    if(type=="make"){
        fs.open(`${str}.db`,'w',function(err,fd){});
    }
    if(type=="put"){
        if(db(str,"data")!=""){
            fs.writeFile(`${str}.db`, fs.readFileSync(`${str}.db`).toString()+"||||||||||"+`\`${put}\``, 'utf8', function(error){});
        }
        else{
            fs.writeFile(`${str}.db`, `\`${put}\``, 'utf8', function(error){});
        }
    }
    if(type=="data"){
        eval(`jsonDATA=[${fs.readFileSync(`${str}.db`).toString().split("||||||||||")}]`);
        return jsonDATA;
    }
    else{
        type=type*1;
        let v=db(str,"data");
        for(let i=0;i<v.length;i++){
            if(i==type){
                v[i]=put;
            }
        }
        fs.writeFile(`${str}.db`, "`"+v.join("||||||||||")+"`", 'utf8', function(error){});
    }
}