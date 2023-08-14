function create(type, attribute = undefined, name = undefined) {
    const element = document.createElement(type);
    if (attribute && name) {
        element.setAttribute(attribute, name);
    }
    return element;
}

const container = document.getElementById("container");
const myArray = ["name", "family", "email", "age"];

function createInputs() {
    const arrayPut = [];
    for (let index = 0; index < myArray.length; index++) {
        const label = create("label");
        label.textContent = myArray[index];
        const input = create("input", "id", `${index}`);
        arrayPut.push(input);
        container.append(label, input);
    }
    return arrayPut;
}
const arrayPut = createInputs();
const putButton = create("button");
putButton.textContent = "submit";
container.append(putButton);

let objectPut = {};

putButton.addEventListener("click", (event) => {
    for (let index = 0; index < myArray.length; index++) {
        objectPut[myArray[index]] = arrayPut[index].value;
    }
    console.log(objectPut);
    const reqOptions = {
        method: "POST",
        body: JSON.stringify(objectPut),
        headers: { "Content-Type": "application/json" },
    };
    fetch("https://jsonplaceholder.typicode.com/users", reqOptions)
        .then((resp) => resp.json())
        .then((jason) => console.log(jason))
        .catch((err) => console.log(err))
});
