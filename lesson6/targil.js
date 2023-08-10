print = console.log
//q1
function sumNumbers(n1, n2) { print(n1 + n2) }

sumNumbers(5, 7)

//q2
function mutlipul(n1, n2) { print(n1 * n2) }
mutlipul(5, 7)
//q3
function mudlo(n1, n2) { print(n1 % n2) }
mudlo(10, 5)
//q4
function divade(n1, n2) { print(n1 / n2) }
divade(7, 5)
//q5

function theBiger(n1, n2) {
    if (n1 > n2) print(n1)
    else print(n2)
}
theBiger(5, 7)

//q6

function evenOrOdd(n) {
    if (n % 2 === 0) print('the number is even')
    else print('the number is odd')
}

evenOrOdd(7)
//q7
function rectengelErae(side, hight) { print(side * hight / 2) }

rectengelErae(5, 7)
//q8
function sicrolErae(radios) { print(radios ** 2 * Math.PI) }
sicrolErae(5)
//q9
function sircolskope(radios) { print(radios * 2 * Math.PI) }
sircolskope(7)

//q10
function theLongest(s1, s2) {
    if (s1.length > s2.length) print(s1)
    else print(s2)
}

theLongest("ljlj", "lkjljlll")
//q11
function theFirstLetter(s = "") {
    let first = s[0]
    let other = s.substring(1)
    print(first.toUpperCase() +
        other.toLowerCase())
}
theFirstLetter("Hello")


