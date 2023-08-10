//create home page
function createHomePage() {
 // function to create elements
 function create(type, attribute = undefined, name = undefined) {
    element = document.createElement(type);
    element.setAttribute(attribute, name);
    return element;
}

    //creating the header

    const header = document.getElementById("head");
    const text = document.createElement("p");
    text.textContent = "inventory management";

    //creating links for the header
    const homeLink = document.createElement("a");
    homeLink.href = "home.html";

    const icons = document.createElement("div");
    const home = document.createElement("i");
    home.classList.add("fa", "fa-home");
    const add = document.createElement("i");
    add.classList.add("fa", "fa-plus");
    homeLink.append(home);
    icons.append(homeLink, add);
    header.append(text, icons);

    // create adit

    //creating filter
    const filter = document.getElementById("filter");
    const buttons = document.createElement("div");
    buttons.setAttribute("id", "buttonsFilter");

    //creating buttons
    const arrayButtons = [
        "All Products",
        "men",
        "women",
        "jewelery",
        "electronics",
    ];
    const buttonEvent = arrayButtons.map((category) => {
        const myButton = document.createElement("button");
        myButton.textContent = category;
        buttons.append(myButton);
        return myButton;
    });
    //create table
    let tableCard = document.createElement("table");
    //creating events for buttons
    buttonEvent.forEach((element) => {
        element.addEventListener("click", () => {
            if (element.textContent != "All Products") {
                const newData = data.filter(
                    (object) =>
                        object.category.includes(element.textContent) &&
                        !object.category.includes("wo" + "" + element.textContent)
                );

                if (tableCard) {
                    tableCard.remove();
                }
                createCards(newData);
            } else {
                if (tableCard) {
                    tableCard.remove();
                }
                createCards(data);
            }
        });
    });
    //create search
    const searchButton = create("input");
    const searchIcon = create("i", "class", "fa fa-search");
    const label = create("label");
    label.append(searchIcon, searchButton);
    searchIcon.addEventListener("click", () => {
        if (tableCard) {
            tableCard.remove();
        }
        const myData = data.filter(
            (object) =>
                object.description.includes(searchButton.value) ||
                object.title.includes(searchButton.value)
        );
        createCards(myData);
    });

     filter.append(buttons, label);

    //creating main
    const main = document.getElementById("main");
    //creating table for cards
    function createCards(data) {
        tableCard = document.createElement("table");
        let row = tableCard.insertRow(0);
        for (let index = 0; index < data.length; index++) {
            if (index % 4 === 0 && index != 0) {
                row = tableCard.insertRow(-1);
            }

            const coll = row.insertCell(index % 4);
            //creating cards content
            //card top
            const card = document.createElement("div");
            card.setAttribute("class", "card");
            const img = document.createElement("img");
            img.src = data[index].image;

            //card bottom
            const cardBottom = document.createElement("div");
            cardBottom.setAttribute("class", "cardBottom");
            const title = document.createElement("div");
            title.setAttribute("class", "description");
            title.textContent = data[index].title;
            //create pages

            //create product page
            img.addEventListener("click", () => {
                const [
                    titleProduct,
                    ,
                    description,
                    category,
                    price,
                    titles,
                    quantity
                ] = createPages("Product Pages");

                main.append(
                    titleProduct,
                    img,
                    titles[0],
                    title,
                    titles[1],
                    description,
                    titles[2],
                    category,
                    titles[3],
                    price,
                    titles[4],
                    quantity
                );
            });

            const line = document.createElement("hr");
            //card icons
            const icons = document.createElement("div");
            icons.setAttribute("class", "icons");
            //pencil icon

            const pencil = document.createElement("i");
            pencil.classList.add("fa", "fa-pencil");
            //garbage icon
            const garbage = document.createElement("i");
            garbage.classList.add("fa", "fa-trash-o");
            garbage.addEventListener("click", () => {
                card.remove();
            });

            icons.append(pencil, garbage);
            cardBottom.append(title, line, icons);
            card.append(img, cardBottom);
            coll.append(card);
            //create pages function
            function createPages(title) {
                main.innerHTML = "";
                filter.remove();
                //edit header
                const myRow = create("i", "class", "fas fa-pencil-alt");
                header.append(pencil, myRow);
                add.remove();
                const titleProduct = create("h1");
                titleProduct.textContent = title;
                const pageTitle = data[index].title
                const description = data[index].description;
                const category = data[index].category;
                const price = data[index].price;
                const min = 1;
                const max = 100;
                const picture = data[index].image;
                //create titles
                const titleArray = [
                    "Title",
                    "Description",
                    "Category",
                    "Price",
                    "Quantity",
                ];
                let titles = titleArray.map((str) => {
                    const myTitle = create("h2");
                    myTitle.textContent = str;
                    return myTitle;
                });

                const quantity = Math.floor(Math.random() * (max - min + 1)) + min;
                return [
                    titleProduct,
                    pageTitle,
                    description,
                    category,
                    price,
                    titles,
                    quantity,
                    picture

                ];

            }

            //edit event creator
            pencil.addEventListener("click", () => {
                createPages("Edit Product");
                //edit header
                pencil.remove();
                header.append(searchIcon);
                //create main
                const [
                    titleProduct,
                    pageTitle,
                    description,
                    category,
                    price,
                    ,
                    quantity,
                    picture
                ] = createPages("Edit Product");
                //adding title
                main.append(titleProduct)
                const elementsForInput = [pageTitle, description, category, price, picture, quantity];

                const titleArray = [
                    "Title",
                    "Description",
                    "Category",
                    "Price",
                    'Picture',
                    "Quantity",

                ]
                

               
                const inputs = []
                //create the content to edit  
                function editContent(elements, titles) {
                    for (let count1 = 0; count1 < 6; count1++) {
                        // console.log(titles[count1]);
                        const myLabel = create("label");
                        myLabel.textContent = titles[count1];
                        const editInput = create("input", "placeholder");
                        editInput.placeholder = elements[count1];
                        myLabel.append(editInput);
                        main.append(myLabel);
                        inputs.push(editInput)

                    }
                    return inputs

                }
                //create button 
                const buttonLink = create('a');
                buttonLink.href = 'home.html'
                const buttonEdit = create('button');
                buttonEdit.textContent = 'Edit'
                buttonLink.append(buttonEdit)
                main.append(buttonLink);
                const useInput = editContent(elementsForInput, titleArray)

                //create button Event
                buttonEdit.addEventListener('click', () => {
                    function changeData() {
                        data[index].title = useInput[0].value;
                        data[index].description = useInput.description;
                        data[index].category = useInput.category;
                        data[index].price = useInput.price;
                        data[index].picture = useInput.picture;
                        data[index].quantity = useInput.quantity;
                    }
                    changeData();b
                    
                    
                })

                
            });
        }


        main.append(tableCard);


    }
    createCards(data);
    //create footer
    const footer = document.getElementById("footer");
    const footerIcon = create("i", "class", "fa fa-phone");
    footer.textContent = "technical support  ";
    footerPhone = create("p");
    footerPhone.textContent += "1.555.555.555.5555";
    footer.append(footerIcon, footerPhone);
}



function main() {
   

    createHomePage();

}


window.addEventListener("load", main);
