
//q1
const array = [1,2,3,4,5];
array.forEach((num)=>{
    console.log(num);
})
//q2
let amount= 0;
array.forEach((num)=>{
    amount += num;
    console.log(amount);
})


//q2
let count = 1;
array.forEach((num)=>{
    count *= num;
})
//q3
console.log(amount/array.length);
//q4



