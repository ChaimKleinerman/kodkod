function createHeader(font,text,color){
    body = document.getElementsByTagName('body')[0];
    h = document.createElement('h');
    h.style.fontSize = font;
    h.style.color = color;
    h.textContent = text;
    body.appendChild(h);
}

createHeader('200px','hello world','red')

