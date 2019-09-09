
let gameArray = ;

console.log(gameArray);

/*

let winnningCombos = [
  [gameArray[0], gameArray[1], gameArray[2]],
  [gameArray[3], gameArray[4], gameArray[5]],
  [gameArray[6], gameArray[7], gameArray[8]],
  [gameArray[0], gameArray[3], gameArray[6]],
  [gameArray[1], gameArray[4], gameArray[7]],
  [gameArray[2], gameArray[5], gameArray[8]],
  [gameArray[0], gameArray[4], gameArray[8]],
  [gameArray[6], gameArray[4], gameArray[2]],
]; 

for (i = 0; i < winnningCombos.length; i++) {
  if (winnningCombos[i.textContent] == "X" || winnningCombos[i.textContent] == "O") {
    alert("You win!");
  };
}

*/



let emptyGameArray = gameArray.filter(function(box) {
  return box.innerHTML = "";
});

// Generates random X or random O within empty boxes 

function compX() {
  let randomNum = Math.floor(Math.random() * emptyGameArray.length);
  let compX = emptyGameArray[randomNum];
  compX.innerHTML = 'X';
}

function compO() {
  let randomNum = Math.floor(Math.random() * emptyGameArray.length);
  let compO = emptyGameArray[randomNum];
  compO.innerHTML = 'O';
}

// Shows X text & shows random O text

function showX(event) {
  let showX = event.target;
  showX.innerHTML = 'X';
  compO();
  console.log(emptyGameArray);
}

// Shows O text & shows random X text

function showO(event) {
  let showO = event.target;
  showO.innerHTML = 'O';
  compX();
  console.log(emptyGameArray);
}

// Adds click event listener to each 'box' inside the array ----------------------------------

// Choose X & disable chooseO() by setting it to an empty function

function chooseX() { 
  emptyGameArray.forEach(function(box) {
    box.addEventListener('click', showX);
  })
  window.chooseO = function(){};
  console.log(chooseX);
  }

// Choose O & disable chooseX() by setting it to an empty function

function chooseO() { 
  emptyGameArray.forEach(function(box) {
    box.addEventListener('click', showO);
  })
  window.chooseX = function(){};
  console.log(chooseO);
}

