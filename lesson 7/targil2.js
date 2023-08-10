
const myPrint = console.log;

//q1

function returnArray(n) {
    const Ary = [];
    for (let i = 1; i < n + 1; i++) {
        Ary.push(i);

    }
    return Ary;
}
myPrint(returnArray(8));
//q2
let sum = 0;
function returnSum(n) {
    for (let i = 1; i <= n; i++) {
        const input = prompt(`please insert  number`);
        sum += parseInt(input);
    }
    return sum;

}
myPrint(returnSum(4));
//q3
let Order = [];

let j = 0;
function byOrder(array) {
    while (j < array.length) {
        let temp = array[0];
        for (let i of array) {
            if (i <= temp) temp = i;
        }

        Order.push(temp);
        let index = array.indexOf(temp);
        array.splice(index, 1);
        


    }
    return Order;



}

myPrint(byOrder([5,8,3]));
//q4
 Order = [];

 j = 0;
function byOrderO(array) {
    while (j < array.length) {
        let temp = array[0];
        for (let i of array) {
            if (i >= temp) temp = i;
        }

        Order.push(temp);
        let index = array.indexOf(temp);
        array.splice(index, 1);
        


    }
    return Order;



}

myPrint(byOrderO([5,8,3]));
//q5
const noDoub = [];
function noDouble(array) {
    for (const num of array) {
        if (!noDoub.includes(num)) noDoub.push(num);
    }
    return noDoub;
}
    
    
  
        

const x = [2,3,3,4,2];
myPrint(noDouble(x));

//q6
function merge(array1,array2){
    const array3 = array1.concat(array2);
    return  noDouble(array3);
}
const y = [10,15,2];
myPrint(merge(x,y));





