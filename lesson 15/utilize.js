import { error } from "console";
import fs from "fs";

export function read() {
    return new Promise((resolve, reject) => {
        fs.readFile("data/myData.txt", "utf-8", (err, data) => {
            if (err) reject(trow ("this is error"));
            resolve(data);
        });
    });
}

export function write(CurrentData){
    fs.appendFile('myText.txt',CurrentData,(err)=>{
        if (err) throw err;
        console.log('The file has been saved!');
    })
}



