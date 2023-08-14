import { read, write } from "./utilize.js";

//adding data
read().then((data) => write(`the text is: ${data}\n\n`));
//adding length
read().then((data) => {
    const newText = data.slice();
    const numWords = newText.split(" ");
    const num = numWords.length;
    write(`the number of words is: ${num.toString()}\n\n`);
});
//adding reverse

