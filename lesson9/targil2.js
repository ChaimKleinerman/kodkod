

const but1= document.getElementById("div1")
const div = document.getElementById("div2")

but1.addEventListener("click", () => {
    div.style.backgroundColor = 'blue';
    
})
const select = document.getElementById('div3')

select.addEventListener('click', () => {
    div.style.backgroundColor = select.value
} )

const shot = document.getElementById('div4')

shot.addEventListener('click',()=>{
    div.style.display = 'none'
})

const inputAdd = document.getElementById('div5')

const buttonAdd = document.getElementById('div6')

const selectElement = document.getElementById('div3');


buttonAdd.addEventListener('click', ()=> {
    const newOption = document.createElement('option')
      
      newOption.textContent = inputAdd.value
      selectElement.appendChild(newOption);
})







