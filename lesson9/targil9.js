
window.addEventListener('load',() =>{
    const {table,input,button} = createElements();
   
    button.addEventListener('click',()=>{
        Insert(table,input);    
    });

    

});

createElements = () =>{
   const body = document.body
   const divContainer = document.createElement('div');
   const table = document.createElement('table');
   const input = document.createElement('input');
   input.placeholder = 'add';
   const button = document.createElement('button')
   button.textContent = 'Add'
   
   body.append(divContainer);
   divContainer.append(table,input,button);
   
   
   const rowHead = table.insertRow(0);
   const collHead = rowHead.insertCell(0);
   collHead.textContent = 'To Do List';

   const erase = document.createElement('button');
   
   Style(table,body,input);
  return {table,input,button}
}



 function Style(table,body,input,button) {
    body.style.display = 'flex';
    table.style.display = 'flex';
    table.style.justifyContent = 'center';
    table.style.border = 'solid';
    table.style.marginBottom = '20px';
    table.style.width = '400px';
    body.style.justifyContent = 'center';
    input.style.marginLeft = '100px';
    input.style.marginRight = '10px';
    

    

}


function Insert (table,input) {
   const checkBox = document.createElement('input');
   checkBox.type = "checkbox";
   erase = document.createElement('button');
   erase.textContent = 'erase'
    
   const row =  table.insertRow(-1);
   const coll1 = row.insertCell(0);
   const coll2 = row.insertCell(1);
   const coll3 = row.insertCell(2);
   coll1.appendChild(erase)
   coll2.appendChild(checkBox)
   coll3.textContent = input.value

   erase.addEventListener('click',()=> {
    myErase(row);    
});
}
   
   


myErase = (row) => {
  row.remove()
}















