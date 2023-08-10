q1
person = {
    id: 1,
    name: 'john',
    age: 30,
    address:{ city: 'London', street: 'Abbey Road'},
    children: [{
        name: 'John Junior',
        age: 5,
    }, {
        name:'lilly',
        age:2,
    }
] 

}

console.log(person.name);
console.log(person.age);
console.log(person.address.city);

console.log(person.address.street);
 const first = person.children[0];
 const second = person.children[1];
console.log(first.name);
console.log(second.age);








