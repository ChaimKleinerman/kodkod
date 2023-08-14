import lodash from "lodash";
import { read, write } from "./utilize.js";
//adding reverse
read().then((data) => {
    const newText = data.slice();
    const numWords = newText.split(" ");
    const reverseArray = lodash.reverse(numWords);
    const reverseString = reverseArray.toString();
    write(`this is reverse: ${reverseString}\n\n`);
});
//adding uniq words
read().then(data =>{
    const newText = data.slice();
    const numWords = newText.split(" ");
    const uniqWords = lodash.uniq(numWords);
    write(`this is uniq words: ${uniqWords}\n\n`)
})
//adding upper string
read().then((data) => {
    const newText = data.slice();
    const numWords = newText.split(" ");
    const uniqWords = lodash.uniq(numWords);
    const toStrUpper = uniqWords.toString().toUpperCase();
    write(`this is uniq in upper case: ${toStrUpper}\n\n`);
});

//adding upper string bigger then five

read().then((data) => {
    const newText = data.slice();
    const numWords = newText.split(" ");
    const uniqWords = lodash.uniq(numWords);
    const biggerThenFive = uniqWords.filter((element) => element.length > 4);
    write(`this is uniq and bigger then five: ${biggerThenFive}\n\n`);
});

read().then((data) => {
    const newText = data.slice();
    const numWords = newText.split(" ");
    const uniqWords = lodash.uniq(numWords);
    const vowels = [];
    const letters = "aoieu";
    uniqWords.forEach((element) => {

        let count = 0;
        let myObject = {};
        myObject.word = element;
        myObject.vowelCount = count;
        element.split("").forEach((letter) => {
            if (letters.includes(letter)) {
                count++;
                vowels.count = count;
            }
        });
        myObject.vowelCount = count;
        vowels.push(myObject);
    });
    const stringVowels = JSON.stringify(vowels)
    write(`this is the words with the num of vowels: ${stringVowels}\n\n`);
});


