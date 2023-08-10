
const users = [
    {
        id: 1,
        cell: "076 291 85 09",
        dob: {
            date: "1987-12-28T17:51:39.366Z",
            age: 35
        },
        email: "besim.mercier@example.com",
        gender: "male",
        address: {
            country: "Switzerland",
            state: "Bern",
            city: "Rheineck",
            street: {
                number: 2560,
                name: "Rue Dugas-Montbel"
            }
        },
        name: {
            title: "Monsieur",
            first: "Besim",
            last: "Mercier"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/57.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/57.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/57.jpg"
        },
        todos: [
            { id: 1, title: 'd' },
            { id: 2, title: 'Lorem ipsum dolor sit 2.' },
            { id: 3, title: 'Lorem ipsum dolor sit 3.' }

        ]
    },
    {
        id: 2,
        cell: "0172-1546513",
        dob: {
            date: "2000-08-22T19:35:28.279Z",
            age: 22
        },
        email: "emmi.holzer@example.com",
        gender: "male",
        address: {
            country: "Germany",
            state: "Schleswig-Holstein",
            city: "Groß-Bieberau",
            street: {
                number: 9631,
                name: "Marktplatz"
            }
        },
        name: {
            title: "Mr",
            first: "Emmil",
            last: "Holzer"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/23.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/23.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/23.jpg"
        },
        todos: []
    },
    {
        id: 3,
        cell: "62901262",
        dob: {
            date: "1973-03-07T09:15:47.390Z",
            age: 49
        },
        email: "katrine.jorgensen@example.com",
        gender: "male",
        address: {
            country: "Denmark",
            state: "Hovedstaden",
            city: "Silkeboeg",
            street: {
                number: 5234,
                name: "Skansevej"
            }
        },
        name: {
            title: "Prof",
            first: "John",
            last: "Jørgensen"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/78.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/78.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/78.jpg"
        },
        todos: [{
            id: 1, title: 'Lorem ipsum dolor sit.'
        },
        { id: 2, title: 'Lorem ipsum dolor sit 2.' },
        {
            id: 3, title: 'Lorem ipsum dolor sit 3.'
        },
        { id: 4, title: 'Lorem ipsum dolor sit 4.' }]
    },
    {
        id: 4,
        cell: "07096 461710",
        dob: {
            date: "2000-10-12T10:02:37.380Z",
            age: 22
        },
        email: "debbie.hughes@example.com",
        gender: "male",
        address: {
            country: "United Kingdom",
            state: "West Sussex",
            city: "Bradford",
            street: {
                number: 9980,
                name: "Broadway"
            }
        },
        name: {
            title: "Mr",
            first: "Debbie",
            last: "Hughes"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/88.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/88.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/88.jpg"
        },
        todos: []
    },
    {
        id: 5,
        cell: "07344 527913",
        dob: {
            date: "1960-01-03T04:10:14.584Z",
            age: 63
        },
        email: "faith.frazier@example.com",
        gender: "male",
        address: {
            country: "United Kingdom",
            state: "Borders",
            city: "Canterbury",
            street: {
                number: 6191,
                name: "King Street"
            }
        },
        name: {
            title: "Mr",
            first: "Faith",
            last: "Frazier"
        },
        picture: {
            large: "https://randomuser.me/api/portraits/men/16.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/16.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/16.jpg"
        },
        todos: []
    }
];

//creating the body



window.addEventListener('load', () => {
    function createCards() {
        //braining the body and the div
        const body = document.body
        const container = document.getElementsByClassName('users-container')[0]
        //creating headline 
        const title = document.createElement('h1')
        title.textContent = 'User Interface Management'
        container.append(title)

        // creating the cards
        for (let num = 0; num < users.length; num++) {
            let myCard = document.createElement("div");
            container.append(myCard);
            //creating the img content
            const img = document.createElement('img')
            img.src = users[num].picture.thumbnail
            // creating the name 
            const myName = document.createElement('p')
            myName.textContent = users[num].name.title + ' ' + users[num].name.firstName + ' ' + users[num].name.lastName;
            // img and name div
            const first = document.createElement('div')
            first.append(img, myName)
            // creating email
            const second = document.createElement('div')
            const myEmail = document.createElement('h2')
            myEmail.textContent = 'Email'
            const editEmail = document.createElement('button')
            editEmail.textContent = 'Edit Email'
            const userEmail = document.createElement('p')
            userEmail.textContent = users[num].email
            //creating address
            const myAddress = document.createElement('h2')
            const userAddress = document.createElement('p')
            myAddress.textContent = 'Address'
            userAddress.textContent = users[num].address.country + " " + users[num].address.state + ' ' + users[num].address.city + ' ' + users[num].address.street.number + ' ' + users[num].address.street.name;

            //creating buttons
            const third = document.createElement('div');
            let addElements = document.createElement('button');
            const deleteUser = document.createElement('button');
            const showMOre = document.createElement('button');
            addElements.textContent = 'show more details';
            deleteUser.textContent = 'Delete User';
            showMOre.textContent = 'Show more functions';
            third.append(deleteUser, showMOre);



            second.append(myEmail, editEmail, userEmail, myAddress, userAddress, addElements);
            myCard.append(first, second, third);

            //adding more details 
            let visible = false
            addElements.addEventListener('click', (event) => {
                if (visible === false) {
                    addElements.textContent = 'hide more details';
                    const table = document.createElement('table');
                    const row1 = table.insertRow(-1);
                    const coll1 = row1.insertCell(0);
                    coll1.textContent = 'More Details';
                    const row2 = table.insertRow(-1);
                    const coll2 = row2.insertCell(0);
                    coll2.textContent = 'cell number' + ' ' + users[num].cell;

                    const row3 = table.insertRow(-1);
                    const coll3 = row3.insertCell(0);
                    coll3.textContent = 'date of birth' + ' ' + users[num].dob.date;
                    table.append(row1, row2, row3)
                    second.append(table)
                    visible = true
                }
                //hide more details
                else {

                    second.removeChild(second.lastChild);

                    addElements.textContent = 'show more details';
                    visible = false;
                }
            })


            //delete card
            deleteUser.addEventListener('click', () => {
                alert('you shore you want to delete');
                myCard.remove();
                users.splice(num, 1)
                console.log(users)
            })
            //create more actions
            showMOre.addEventListener('click', () => {
                showMOre.textContent = 'hide more functions'
                const table = document.createElement('table')
                for (let num2 = 0; num2 < 9; num2++) {
                    const row = table.insertRow(num2)
                    const coll = row.insertCell(0)
                    switch (num2) {
                        case 0:
                            coll.textContent = 'Change Img'
                            table.append(coll)
                            break
                        case 1:
                            const src = document.createElement('input');
                            coll.append(src)
                            table.append(coll)

                            break
                        case 2:
                            const approve = document.createElement('button');
                            approve.textContent = 'Approve Change'
                            coll.append(approve)
                            table.append(coll)
                            break
                        case 3:
                            coll.textContent = 'Hubbies'
                            table.append(coll)
                            break
                        case 4:
                            const myList = document.createElement('ul')
                            for (let index = 0; index < users[num].todos.length; index++) {
                                if (users[num].todos.length > 0) {
                                    let listItem = document.createElement('li');
                                    //why with [] it donsn't shows the hubbise
                                    listItem.textContent = users[num].todos[index].title

                                    myList.append(listItem)

                                }
                                coll.append(myList)
                                table.append(coll)
                                break
                            }
                        case 5:
                            coll.textContent = 'Add hubby';
                            table.append(coll)
                            break;

                        case 6:
                           const addHubby =document.createElement('input') 
                           coll.append(addHubby)
                           table.append(coll)
                           break
                        case 7:
                            const buttonAddHubby = document.createElement('button')
                            coll.append(buttonAddHubby)
                            table.append(coll)
                        case 8:
                            



                    }
                    third.append(table)



                }
            })






        }

    }



    createCards()
})











