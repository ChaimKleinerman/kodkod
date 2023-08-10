//q1
function returnPromise(){
 const successPromise = new Promise ((resolve) => {
    resolve('success');
   
 })
 return successPromise;
}
returnPromise()
.then((res) => console.log(res));
//q2

function allName(first,last){
    console.log(first);
    setTimeout(() => {
        console.log(last)
    },1000)
}
allName('chaim','kleinerman');

//q3
function addFive(num){
    return new Promise((resolve)=>{
        setTimeout(() =>{
          resolve(num += 5)
        },500)
    })
}

const multiplyByTwo = (num) =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(num *= 2);
          },500) 
    })
} 

const subtractTen= (num) =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(num -= 10);
          },500) 
    })
}
addFive(9)
.then((num) =>multiplyByTwo(num))
.then((num) => subtractTen(num))
.then((num) => console.log(num))

//q4
function divide(num1,num2){
    return new Promise((result,reject) =>{
        if (num2 != 0){
            setTimeout(()=>{
    result(num1 /=num2);
            },500)
        }
        else{
            reject(new Error("can't divide by 0"));

        }
    })
}

divide(5,2)
.then((num1)=> console.log(num1))
.catch((err) => console.log(err))

//q5
function allName2(first,last){
console.log(first);
return new Promise((resole) => {
    setTimeout(() => {
        resole(last)
    },500)
})
}


async function allNameAsync2(){
const firstAndLast = await allName2('chaim','kleinerman')
console.log(firstAndLast);
}
allNameAsync2()

function addFive2(num){
    return new Promise((resolve)=>{
        setTimeout(() =>{
          resolve(num += 5)
        },500)
    })
}

const multiplyByTwo2= (num) =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(num *= 2);
          },500) 
    })
} 

const subtractTen2= (num) =>{
    return new Promise((resolve)=>{
        setTimeout(() =>{
            resolve(num -= 10);
          },500) 
    })
}

async function getPromises2(){
    const plus = await addFive2(10);
    const multiply = await multiplyByTwo2(plus);
    const subtract = await subtractTen2(multiply);
    console.log(subtract);

}
getPromises2()
//q6

function divide2(num1,num2){
    return new Promise((result,reject) =>{
        if (num2 != 0){
            setTimeout(()=>{
    result(num1 /=num2);
            },500)
        }
        else{
            reject(new Error("can't divide by 0"));

        }
    })
}
async function getProm2(){
    try {
        const divideTowNum = await divide2(1,3);
        console.log(divideTowNum);
    }
    catch(err) {
    console.log(err);
    }
}
getProm2()
