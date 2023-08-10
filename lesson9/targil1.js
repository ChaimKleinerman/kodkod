//q1
const changeText = () => {
    const text = document.getElementsByTagName('h1')[0];
    text.innerText = 'Mouse in';
    text.style.color = 'blue';
    text.style.fontSize = '24px';
    text.style.backgroundColor = 'yellow';
    text.style.padding = '10px';
    text.style.border = '1px solid black';
    
}

function returnText (){
    const text = document.getElementsByTagName('h1')[0].innerText = 'Mouse Out';
    
}

