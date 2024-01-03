let btns = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let messageContainer = document.querySelector(".message-container");
let message = document.querySelector("#message");
let game = document.querySelector(".game");
let heading = document.querySelector("h1");

let turnO = true; 
let count = 0; 

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  messageContainer.classList.add("hide");
};

btns.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  message.innerText = `GAME DRAW`;
  
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of btns) {
    box.disabled = true;
    // contain.disabled=true;

    // game.hidden=true;
    box.hidden=true;
    heading.hidden=true;
    resetBtn.hidden=true;
  }
};

const enableBoxes = () => {
  for (let box of btns) {
    box.disabled = false;
    box.innerText = "";

    // game.hidden=false;
    box.hidden=false;
    heading.hidden=false;
    resetBtn.hidden=false;
  } 
};

const showWinner = (winner) => {
message.innerText = `Congratulations, Winner is ${winner}`;
  messageContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = btns[pattern[1]].innerText;
    let pos3Val = btns[pattern[0]].innerText;
    let pos2Val = btns[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);