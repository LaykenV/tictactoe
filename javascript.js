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
let tie = false;
const diffuculty = document.querySelector("#diffuculty");
let diff = function() {
    if (diffuculty.value == "easy") {
        return compE.getRandom();
    }
    else if (diffuculty.value == "hard") {
        return compH.play();
    }
}

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
        let tie = false;
        let randomSquare = board[Math.floor(Math.random() * board.length)];
        if (randomSquare.innerHTML == "") {
            randomSquare.innerHTML = "O";
        }
        else if (board[0].innerHTML && board[1].innerHTML && board[2].innerHTML && board[3].innerHTML && board[4].innerHTML && board[5].innerHTML && board[6].innerHTML && board[7].innerHTML && board[8].innerHTML !== "") {
            return null;
        }
        else {
            getRandom();
        }
    }
    return { getRandom }
})();


const compH = (() => {
    
    const play = function() {
        let corners = [0, 2, 6, 8]
        if (board[4].innerHTML == "") {
           return board[4].innerHTML = "O";
        }
        
        
        else {compE.getRandom()};
    }

    return {play}
            
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
        let turns = 0;
        turns++;
        for (let i = 0; i <= 7; i++) {
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
                    if (element !== a && element !== b && element !== c) {
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
                    if (element !== a && element !== b && element !== c) {
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
        if (turns == 9) {
            return tie = true;
        }
        else if (compWon == false && gameWon == false && tie == true) {
            alert("tie");
        }
    }


    return {gameEnd};

})();

square1.addEventListener("click", function () {
    if (square1.innerHTML == "") {
        player.s1();
        diff();
        gameFlow.gameEnd();

    };
});

square2.addEventListener("click", function () {
    if (square2.innerHTML == "") {
        player.s2();
        diff();
        gameFlow.gameEnd();
    };
});

square3.addEventListener("click", function () {
    if (square3.innerHTML == "") {
        player.s3();
        diff();
        gameFlow.gameEnd();
    };
});

square4.addEventListener("click", function () {
    if (square4.innerHTML == "") {
        player.s4();
        diff();
        gameFlow.gameEnd();
    };
});

square5.addEventListener("click", function () {
    if (square5.innerHTML == "") {
        player.s5();
        diff();
        gameFlow.gameEnd();
    };
});

square6.addEventListener("click", function () {
    if (square6.innerHTML == "") {
        player.s6();
        diff();
        gameFlow.gameEnd();
    };
});

square7.addEventListener("click", function () {
    if (square7.innerHTML == "") {
        player.s7();
        diff();
        gameFlow.gameEnd();
    };
});

square8.addEventListener("click", function () {
    if (square8.innerHTML == "") {
        player.s8();
        diff();
        gameFlow.gameEnd();
    };
});

square9.addEventListener("click", function () {
    if (square9.innerHTML == "") {
        player.s9();
        diff();
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
