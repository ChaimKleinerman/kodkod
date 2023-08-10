//q1
function multiple(num1, num2, num3) {

    const promise1 = new Promise((result) => {
        setTimeout(() => {
            result(num1 *= 2)

        }, 1000)
    })

    const promise2 = new Promise((result) => {
        setTimeout(() => {
            result(num2 *= 2)
        }, 1000)
    })

    const promise3 = new Promise((result) => {
        setTimeout(() => {
            result(num3 *= 2)
        }, 1000)
    })
    return Promise.all([promise1, promise2, promise3])
}
let mySum = 0
multiple(1, 2, 3)
    .then((data) => (data.forEach((value) => {
        mySum += value;;
    }), console.log(data)))
    





//q2

function multipleOrReject(array) {
    const promises = array.map((char) => {
        return new Promise((result, reject) => {
            if (char >= 0) result(char *= 2)
            else reject(new Error('this is a negative number'))
        })
    })

    return promises
}
const promArray = multipleOrReject([1, 22, 3])
Promise.allSettled(promArray)
    .then(data => console.log(data))
    .catch(err => console.log(err));
// console.log(promArray);

