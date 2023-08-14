function create(type, attribute = undefined, name = undefined) {
    element = document.createElement(type);
    element.setAttribute(attribute, name);
    return element;
}
let myUrl = "https://randomuser.me/api";
const myButton = create("button", "id", "myButton");
myButton.textContent = "random user";
const container = document.getElementById("container");

const secondButton = create("button", "id", "secondButton");
secondButton.textContent = "5 random users";
container.append(myButton, secondButton);

async function getResponds() {
    try {
        const respond = await fetch(myUrl);
        if (!respond.ok) {
            const err = "an error occurred" + respond.status;
            throw new Error(err);
        }
        const myMessage = await respond.json();
        return myMessage;
    } catch (err) {
        console.error(err)
    }
}

async function createRandomUser() {
    const myData = await getResponds();
    console.log(myData);
    const myName = create("div", "id", "information");
    myName.textContent = Object.values(myData.results[0].name);
    const myEmail = create("div");
    myEmail.textContent = myData.results[0].email;
    const myPhoto = create("img", "id", "myPhoto");
    myPhoto.src = myData.results[0].picture.medium;
    const myAge = create("div");
    myAge.textContent = myData.results[0].registered.age;

    container.append(myName, myEmail, myPhoto, myAge);
}

myButton.addEventListener("click", () => {
    myUrl = "https://randomuser.me/api";
    createRandomUser();
});

secondButton.addEventListener("click", async () => {
    myUrl = 'https://randomuser.me/api/?gender=male&results=5'
    createRandomUser();
});
