// Game Board Array from HTML Elements

let gameArray = Array.from(document.getElementsByClassName('box'));

// Fills the emptyGameArray from a filtered gameArray each time emptyArray() is called
 
let emptyGameArray = [];

function emptyArray() {
 emptyGameArray = gameArray.filter(function(box) {
  return !box.textContent;
  });
  console.log(emptyGameArray);
}

// Generates random X or random O within empty boxes 

function compX() {
  emptyArray();
  let randomNum = Math.floor(Math.random() * emptyGameArray.length);
  console.log(randomNum)
  let compX = emptyGameArray[randomNum];
  if (!compX.textContent) {
    compX.textContent = 'X';
    setTimeout(function() {
      if(!checkWin()) {
        showO();
      } else {
        clear();
      }
      emptyArray();
    }, 250);
  };
}

function compO() {
  emptyArray();
  let randomNum = Math.floor(Math.random() * emptyGameArray.length);
  let compO = emptyGameArray[randomNum];
  if (!compO.textContent) {
    compO.textContent = 'O';
    setTimeout(function() {
      if(!checkWin()) {
        showX();
      } else {
        clear();
      }
      emptyArray();
    }, 250);
  };
}

// Shows X text & shows random O text

function showX(event) {
let showX = event.target;
  if (!showX.textContent) {
    showX.textContent = 'X';
    setTimeout(function() {
      if(!checkWin()) {
        compO();
      } else {
        clear();
      }
      emptyArray();
    }, 250);
  } else {
    errorMessage();
  }
}

// Shows O text & shows random X text

function showO(event) {
  let showO = event.target;
  if (!showO.textContent) {
    showO.textContent = 'O';
    setTimeout(function() {
      if(!checkWin()) {
        compX();
      } else {
        clear();
      }
      emptyArray();
    }, 250);
  } else {
    errorMessage();
  }
}

// Choose X & disable chooseO() by setting it to an empty function

function chooseX() { 
  emptyArray();
  emptyGameArray.forEach(function(box) {
    box.addEventListener('click', showX);
  })
  window.chooseO = function(){
    alert('O has been chosen!');
  };
//  console.log(chooseX);
}

// Choose O & disable chooseX() by setting it to an empty function

function chooseO() { 
  emptyArray();
  emptyGameArray.forEach(function(box) {
    box.addEventListener('click', showO);
  })
  window.chooseX = function(){
    alert('X has been chosen!');
  };
//  console.log(chooseO);
}

// Adds general click event listener to each 'box' inside the array ----------------------------------

function errorMessage() {
  alert('That box is already filled, you cheater!');
}

// Creates an array of winning combos

let winningCombos = [
  [gameArray[0], gameArray[1], gameArray[2]],
  [gameArray[3], gameArray[4], gameArray[5]],
  [gameArray[6], gameArray[7], gameArray[8]],
  [gameArray[0], gameArray[3], gameArray[6]],
  [gameArray[1], gameArray[4], gameArray[7]],
  [gameArray[2], gameArray[5], gameArray[8]],
  [gameArray[0], gameArray[4], gameArray[8]],
  [gameArray[6], gameArray[4], gameArray[2]],
]; 

function clear() {
  for(item of gameArray) {
    item.textContent = "";
  }
  emptyGameArray = [];
}

var oWin = 0;
var xWin = 0;

function oWins() {
  oWin++;
  console.log(oWin);
  winState();
}

function xWins() {
  xWin++;
  console.log(xWin);
  winState();
}

function checkWin() {
  let win = false;
  winningCombos.forEach(function(set) {
    let winArray = []
    set.forEach(function(s) {
      winArray.push(s.textContent)
      if (winArray.join() == 'X,X,X') {
        win = true;
        if (!winState()) {
          alert('X wins!');
          xWins();
        } else {
          alert('X wins!');
        };     
      } else if (winArray.join() == 'O,O,O') {
        win = true;
        if (!winState()) {
          alert('O wins!');
          oWins();
        } else {
          alert('O wins!');
        };       
      } else {
        gameArray.textContent;
      }
    });
  });
  if(win == true) {
    return win;
  }
}

function winState() {
  let restart = false;
  if (xWin == 2) {
    alert('X has defeated O!');
    alert('Do you want to play again?');
    location.reload(true);
    restart = true;
  } else if (oWin == 2) {
    alert('O has decimated X!');
    alert('Do you want to play again?');
    location.reload(true);
    restart = true;
  };
  if (restart == true) {
    return restart;
  }
}
