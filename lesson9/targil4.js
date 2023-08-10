const Name = document.getElementById('Name')
const Gender = document.getElementById('Gender')
const Age = document.getElementById('Age')
const trBody = document.getElementById('body')
const button = document.getElementById('button')
const table = document.getElementById('table')




button.addEventListener('click',()=>{
    let ID = table.rows.length - 1

    let row = table.insertRow();

    let id = row.insertCell(0)
    id.textContent = ID

     
   let nameD = row.insertCell(1)
   nameD.textContent = Name.value
    

   let genderD = row.insertCell(2)
   genderD.textContent = Gender.value


    let ageD = row.insertCell(3)
    ageD.textContent = Age.value
    
})

