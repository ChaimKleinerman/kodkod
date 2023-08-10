const button = document.getElementsByTagName('button')[0]

button.addEventListener('click',throwD)
function throwD() {
  const random1 = Math.random();
  const random2 = Math.random();
  const dice1 = `this is dice 1: ${Math.floor(random1 * 6) +1}`
  console.log(dice1);
  const element = document.getElementById('dice')
  element.textContent = dice1;

  const dice2 = Math.floor(random2 * 6) +1;
  element.textContent += ' this is dice 2: ' + dice2;



}