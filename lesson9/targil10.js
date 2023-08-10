const persons = [
    {
        id: 1,
        name: "John Doe",
        age: 30,
        address: { city: "New York", street: "123 Main St" },
        children: [
            { name: "Alice", age: 5 },
            { name: "Bob", age: 8 }
        ]
    },
    {
        id: 2,
        name: "Jane Smith",
        age: 28,
        address: { city: "Los Angeles", street: "456 Elm St" },
        children: [
            { name: "Eva", age: 3 },
        ]
    },
    {
        id: 3,
        name: "Michael Johnson",
        age: 45,
        address: { city: "Chicago", street: "789 Oak St" },
        children: []
    },
    {
        id: 4,
        name: "Emily Williams",
        age: 35,
        address: { city: "Houston", street: "1010 Maple Ave" },
        children: [
            { name: "Oliver", age: 12 },
            { name: "Sophia", age: 10 },
            { name: "Lucas", age: 7 }
        ]
    },
    {
        id: 5,
        name: "Daniel Brown",
        age: 40,
        address: { city: "San Francisco", street: "222 Pine St" },
        children: [
            { name: "Lily", age: 6 },
        ]
    }
];
const Border = document.getElementById('border');

Border.style.width = '200px';
Border.style.height = '1000px';
Border.style.border = 'solid';

let h1 = document.createElement('h1');
let h2 = document.createElement('h2');
let h3 = document.createElement('h3');
let ul1 = document.createElement('ul');
let ul2 = document.createElement('ul');
let li1 = document.createElement('li');
let li2 = document.createElement('li');

for (const person of persons) {
    for (const property in person) {
        switch (property) {

            case 'name':
                h1.textContent = person[property];
                console.log(person[property]);

                Border.appendChild(h1)
                console.log(person[property]);


                break;

            case 'age':
                h2.textContent = person[property];
                Border.appendChild(h2)
                break;

            case 'address':
                const values = person[property];
                h3.textContent = Object.values(values)

                Border.appendChild(h3)
                break;

            case 'children':
                h2.textContent = 'kids';
                Border.appendChild(h2)

                if (person[property][0]) {
                    li1.textContent = person[property][0].name;
                    li2.textContent = person[property][0].age;
                    ul2.appendChild(li2);
                    li1.appendChild(ul2);
                    ul1.appendChild(li1);

                }
                if (person[property][1]) {
                    ul1 = document.createElement('ul')
                    let ul2 = document.createElement('ul')
                    let li1 = document.createElement('li')
                    let li2 = document.createElement('li')

                    li1.textContent = person[property][1].name;
                    li2.textContent = person[property][1].age;
                    ul2.appendChild(li2)
                    li1.appendChild(ul2)
                    ul1.appendChild(li1)
                }
                if (person[property][2]) {
                    ul1 = document.createElement('ul')
                    let ul2 = document.createElement('ul')
                    let li1 = document.createElement('li')
                    let li2 = document.createElement('li')
                    li1.textContent = person[property][1].name;
                    li2.textContent = person[property][1].age;
                    ul2.appendChild(li2)
                    li1.appendChild(ul2)
                    ul1.appendChild(li1)

                }

                Border.appendChild(ul1)
                break;
        }
    }
    h1 = document.createElement('h1')
    h2 = document.createElement('h2')
    h3 = document.createElement('h3')


}