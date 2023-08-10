(function (){
    for (let count = 0; count < 3; count ++){
       const body  = document.getElementsByTagName('body')[0]
       const h = document.createElement('h')
       h.textContent = 'hello world '
       body.append(h)
    }  
})
()