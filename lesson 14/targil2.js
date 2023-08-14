const productList = create("button");
productList.textContent = "product list";
container.append(productList);

async function createList(){
    const listData = await getResponds()
    return listData
}

productList.addEventListener('click',async()=>{
    myUrl = 'https://fakestoreapi.com/products'
   const myList = await createList();
   for (let index = 0; index < 20; index++) {
    const theList = create('div');
    theList.textContent = `the item num ${index}: ${myList[index].title}` 
    container.append(theList)
   }
})
