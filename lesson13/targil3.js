//q1
function getCurrencyRate(cb) {
  setTimeout(() => {
    cb(4);
  }, 1000);
}

getCurrencyRate((element) => {
  console.log(element);
});
//q2
function fakeService(cb, file) {
  setTimeout(() => {
    cb(`this is form filename ${file}`);
  }, 1000);
}
fakeService((erg) => {
  console.log(erg);
}, "my file");

//q3
function checkIfNumberOk(num) {
  return new Promise((result, reject) => {
    if (num > 10) result("Number Ok");
    else reject("number bad");
  });
}

checkIfNumberOk(2).then((res) => console.log(res));
// .catch(err => console.log(err))
//q4
// function checkIfNumberOk2(num2){
//     return new Promise((resolve,reject)=>{
//         num2>10? resolve('number is ok'):reject('number bad')
//     })
// }

// async function check(){
//    try {
//     const result = await checkIfNumberOk2(7)
//     console.log(result);

//     }
// catch(err) {
//     console.log(err);
// }

// }
// check()
// //q5
// function myPromiseA(number) {
//     let myPromise = new Promise((resolve, reject) => {
//     resolve('Promise A success!');
//     });
//     return myPromise;
//    }
//    function myPromiseB(number) {
//     let myPromise = new Promise((resolve, reject) => {
//     resolve('Promise B success!');
//     });
//     return myPromise;
//    }
//    function myPromiseC(number) {
//     let myPromise = new Promise((resolve, reject) => {
//     resolve('Promise C success!');
//     });
//     return myPromise;
// }

// async function asyncFun(){
//     const first = await myPromiseA(1)
//     console.log(first);
//     const second = await myPromiseB(2)
//     console.log(second);

//     const third = await myPromiseC(3)
//     console.log(third);

// }
// asyncFun()
