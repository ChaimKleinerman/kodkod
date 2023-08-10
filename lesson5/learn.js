
// //ex1
let sign = prompt("insert a number");

if (sign => 10) {
  alert("wonderfull");
}
// // ex2
const print = console.log;
let sign1 = prompt("insert tow numbers with comma")
 
let values = sign1.split(',')
let value1 = values[0]
let value2 = values[1]

if (value1 > value2) {
    a(value1);
} else if (value1 === value2) {
    a('they are the same');
} else {
    a(value2);
}
// //ex3

let sign2 = prompt("insert a stirng")
sign2 = sign2.length 
 if (sign2> 20) {a('the string biger then 20')}
 else if (sign2 > 10) {a('the string bigger then 10')}
 else {a('the stirng less then 10')}

// //ex4
let sign3 = prompt('insert a string')
let sign3l = sign3.length 

if (sign3l > 20 ) {a(sign3.substring(0,19))}
else {a(sign3)}

// ex5
let sign4= prompt('insert a number between 1-7')
sign4 = Number(sign4)

switch(sign4)
{case 1: print('sundey');
break;
case 2: print('mondey');
break;
case 3: print('tusdey');
break;
case 4: print('forthdey');
break;
case 5: print('thursdey');
break
case 6: print('fraydey');
break
case 7: print('saturdey');
break;
default: print('this is invalid input') }





