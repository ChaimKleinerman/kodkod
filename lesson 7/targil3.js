q1
function direction(Boolean,num) {
    let signT = '->';
    let signF = '<-';
    let result = '';
    if (bullion === true && num !==0) { 
        let i = 1;
        while (i <= num) {
        
            result += '-';
    
            i ++;
        }
        result += signT;
        return result;
    }

    else if (bullion === false && num !== 0) {
        let i = 1;
        while (i <= num) {
        
            signF += '-';
            i++;
        }
        return signF;
    }

}

console.log(direction(false,2));

q2

function giv0(){
    let input = parseInt(prompt('please insert a number'));
    let sum = input;
    let count = 1;
    let max = input;
    let thisIs4 = null;
    
    while (input !== 0){
        input = parseInt(prompt('please insert a number'));
        sum += input;
        count ++;
        if (count === 4) thisIs4 = input;
        if (max < input) max = input;
    
    }
    if (count < 4) thisIs4 = input;
    const avg = sum/count;
    return `the max is ${max}, the amount of numbers is${count}, the sum is
     ${sum}, the  average is${avg}, the fourth number is${thisIs4}`
    

}
console.log(giv0());

q3

function returnR(n){
    
    let num1 = 0;
    let num2 = 0;
    while (num1 < n){
        let row = '';
        num1 ++;
        while (num2 < num1){
            row +='*';
            num2 ++;
        }
        console.log(row);
        num2 = 0;
        

    }
}
console.log(returnR(5));

//q4
function returnRo(n){
    
    let num1 = n;
    let num2 = 0;
    while (num1 > 0 ){
        let row = '';
        num1 --;
        while (num2 < num1){
            row +='*';
            num2 ++;
        }
        console.log(row);
        num2 = 0;
        

    }
}
console.log(returnRo(5));

//q5
function tableM(n){
    let num1 = 1;
    let num2 = 1; 
    let num3 = n;
    let row = '';
    while(num1 <= n) { 
    row = ''
    while (num2 <= num1) {
        while (num3 > 0) {
            let temp = '' + (num2 * num3)
            row += temp;
            num3 --;

        }
        console.log(row);
        num3 = n;
        num2 ++;
    }
    num1 ++;
    }
    return row;

}
console.log(tableM(4));

q6
function opposite(n) {
    let str = '' + n;
    let revers = '';
    const i = 0;
    
    while (i < str.length) {
      revers += str[str.length-1-i];
      i++;
    }
    return revers;


    }
console.log(opposite(123));
q7
function checkS(str) {
   for (let i of str) {
    if (i != ' ') return false;
   }
   return true; 
}

function character(str) {
    if (str == 0) return '';
    else if (checkS(str) == true) return ' ';
    else return str.trim();
}
console.log(character('  '));
//q8
function arrays(list1,list2) {
    const list3 = [];
    let j = 0;
    let multi = 1;
    sumL2 = 0;
    for (const num of list2) {
        sumL2 += num;
    }
    
    while (j < list1.length) {
   
    for (const i =0; i < list1.length; i ++) {
        if (i != j ) multi *= list1[i];
       
    }
   
    i = 0;
    j++;
    
    let temp =multi*sumL2;
    
    list3.push(temp);
    multi = 1;
}
return list3;
}
const list1 = [1,2,3,4];
const list2 = [5,6,7,8];

console.log(arrays(list1,list2));


