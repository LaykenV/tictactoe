const square1 = document.querySelector(".square1");
const square2 = document.querySelector(".square2");
const square3 = document.querySelector(".square3");
const square4 = document.querySelector(".square4");
const square5 = document.querySelector(".square5");
const square6 = document.querySelector(".square6");
const square7 = document.querySelector(".square7");
const square8 = document.querySelector(".square8");
const square9 = document.querySelector(".square9");
const resetBtn = document.querySelector("#reset");
const board = [square1, square2, square3, square4, square5, square6, square7, square8, square9];


const player = (() => {
    const s1 = () => square1.innerHTML = "X";
    const s2 = () => square2.innerHTML = "X";
    const s3 = () => square3.innerHTML = "X";
    const s4 = () => square4.innerHTML = "X";
    const s5 = () => square5.innerHTML = "X";
    const s6 = () => square6.innerHTML = "X";
    const s7 = () => square7.innerHTML = "X";
    const s8 = () => square8.innerHTML = "X";
    const s9 = () => square9.innerHTML = "X";
    return {
        s1,
        s2,
        s3,
        s4,
        s5,
        s6,
        s7,
        s8,
        s9,
    };
})();

const compE = (() => {
    let getRandom = function () {
        let randomSquare = board[Math.floor(Math.random() * board.length)];
        if (randomSquare.innerHTML == "") {
            randomSquare.innerHTML = "O";
        }
        else if (board[0].innerHTML && board[1].innerHTML && board[2].innerHTML && board[3].innerHTML && board[4].innerHTML && board[5].innerHTML && board[6].innerHTML && board[7].innerHTML && board[8].innerHTML !== "") {
            alert("tie");
        }
        else {
            getRandom();
        }
    }
    return { getRandom }
})();

const compH = (() => {
    
})();

const gameFlow = (() => {
    const winningConditions = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    const gameEnd = function() {
        let gameWon = false;
        let compWon = false;
        for (let i = 0; i < 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];

            if ((a.innerHTML === b.innerHTML) && (b.innerHTML === c.innerHTML) && (a.innerHTML === "X")) {
                gameWon = true;
                a.classList.add("win");
                b.classList.add("win");
                c.classList.add("win");
                for (let i = 0; i < board.length; i++) {
                    const element = board[i];
                    if (element.innerHTML == "O") {
                        element.innerHTML = "";
                    }
                    
                }
            }
            if ((a.innerHTML === b.innerHTML) && (b.innerHTML === c.innerHTML) && (a.innerHTML === "O")) {
                compWon = true;
                a.classList.add("win");
                b.classList.add("win");
                c.classList.add("win");
                for (let i = 0; i < board.length; i++) {
                    const element = board[i];
                    if (element.innerHTML == "X") {
                        element.innerHTML = "";
                    }
                    
                }
            }
            
        }
        if (gameWon == true) {
            alert("You win!")
        }
        if (compWon == true && gameWon == false) {
            alert("You lose to the computer! Haha")
        }
    }

    return {gameEnd};

})();

square1.addEventListener("click", function () {
    if (square1.innerHTML == "") {
        player.s1();
        compE.getRandom();
        gameFlow.gameEnd();

    };
});

square2.addEventListener("click", function () {
    if (square2.innerHTML == "") {
        player.s2();
        compE.getRandom();
        gameFlow.gameEnd();
    };
});

square3.addEventListener("click", function () {
    if (square3.innerHTML == "") {
        player.s3();
        compE.getRandom();
        gameFlow.gameEnd();
    };
});

square4.addEventListener("click", function () {
    if (square4.innerHTML == "") {
        player.s4();
        compE.getRandom();
        gameFlow.gameEnd();
    };
});

square5.addEventListener("click", function () {
    if (square5.innerHTML == "") {
        player.s5();
        compE.getRandom();
        gameFlow.gameEnd();
    };
});

square6.addEventListener("click", function () {
    if (square6.innerHTML == "") {
        player.s6();
        compE.getRandom();
        gameFlow.gameEnd();
    };
});

square7.addEventListener("click", function () {
    if (square7.innerHTML == "") {
        player.s7();
        compE.getRandom();
        gameFlow.gameEnd();
    };
});

square8.addEventListener("click", function () {
    if (square8.innerHTML == "") {
        player.s8();
        compE.getRandom();
        gameFlow.gameEnd();
    };
});

square9.addEventListener("click", function () {
    if (square9.innerHTML == "") {
        player.s9();
        compE.getRandom();
        gameFlow.gameEnd();
    };
});

resetBtn.addEventListener("click", function() {
    for (let i = 0; i < board.length; i++) {
        const element = board[i];
        element.classList.remove("win");
        element.innerHTML = "";
        
    }
})