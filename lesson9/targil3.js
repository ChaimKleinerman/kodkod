const text = document.getElementsByTagName('div')[0]

const topRight = document.getElementById('topRight')
const topLeft = document.getElementById('topLeft' )
const bottomRight = document.getElementById('bottomRight')
const bottomLeft= document.getElementById('bottomLeft')
const centerUp= document.getElementById('centerUp')
const centerBottom = document.getElementById('centerBottom')
const centerLeft = document.getElementById('centerLeft')
const centerRight = document.getElementById('centerRight')
const  center= document.getElementById('center')

topRight.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.justifyContent = 'flex-end'
    text.style.alignItems = 'flex-start'

})

topLeft.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.justifyContent = 'flex-start'
    text.style.alignItems = 'flex-start'

})

bottomLeft.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.alignItems = 'flex-end'
    text.style.justifyContent = 'flex-start'
})

bottomRight.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.alignItems = 'flex-end'
    text.style.justifyContent = 'flex-end'
    
})

centerLeft.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.alignItems = 'center'
    text.style.justifyContent = 'start'

})

centerRight.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.alignItems = 'center'
    text.style.justifyContent = 'flex-end'
    
})

centerUp.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.justifyContent = 'center'
    text.style.alignItems = 'flex-start'

})

centerBottom.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.justifyContent = 'center'
    text.style.alignItems = 'flex-end'
    
})

center.addEventListener('click',()=>{
    
    text.style.display = 'flex'
    text.style.justifyContent = 'center'
    text.style.alignItems = 'center'
    
})




