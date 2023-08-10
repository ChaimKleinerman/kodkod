//q1
//qa
print = console.log
const Ary = [1,2,3,4]
for(let i of Ary)
{print(i)}
//qb
let j = 0
for(let i of Ary)
{ j += i }
print(j)
//qc
j = 1
for(let i of Ary)
{j *= i}
print(j)
//qd
j = 0

for(let i of Ary)
{ j += i }
let vrg = j/Ary.length
print(vrg)
//qe
let last = Ary.pop()
let first = Ary.shift()
Ary.push(first)
Ary.unshift(last)

print(Ary)
//qf
j = []

for(let i of Ary)
{j.push(i)}
print(j)
//qg
Ary.reverse()
print(Ary)
//qh
j = 0
//qi
for(let i of Ary)
{if (j < i) j = i}
print(j)

let even = []
//qj
for(let i of Ary)
{if (i%2 === 0) even.push(i) }
print(even)

//q2
//a
let word = ''
let aryS = ['a','b','c']
for (let i of aryS)
{word += i+' '}
print(word)
//b

 word = ''

for (let i = 0; i < aryS.length; i ++)
{if (i<aryS.length - 1) word += aryS[i]+','
else word += aryS[i]}
print(word)

//c
let count = 0
for (let i of aryS)
{count +=1}
print(count)

//d
copy = []
for (let i of aryS)
{copy.push(i.toUpperCase())}
print(copy)
//e
aryS = ['moshe chaim','b','c','moshe chaim kleinerman']
copy = []

for (let i of aryS)
{if (i.length >= 6) copy.push(i)
}
print(copy)
//f

let longestWord = ''

for (let i of aryS)
{if ( longestWord.length < i.length) longestWord = i
}
print(longestWord)

//g
word = ''
for (let i of aryS){
if (i.length === 4) word = i 
else word = 'Nan'}
print(word)
//q3
//a
const mat = [[2,3,4],[4,6,8],[10,13,15]]
for (let i of mat){
    print(i)
}

//b
for (let i of mat)
{print(i.length)}
//c
let sum = 0
for (let i of mat)
{sum += i.length}
print(sum)
//d
for (let i of mat)
{for(let j of i)
print(j)}

//e

for (let i of mat)
{for(let j of i)
if (j > 5) print(j) }

//f
count = 0 
for (let i of mat)
{for(let j of i)
count += j}
print(count)

//4
//a
let i = 0
while (i<101)
{print(i)
i++}
//b
 i = 0
while (i<101)
{if (i%7 === 0 ) print('Boom')
else print(i)
i++}
























