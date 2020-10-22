let activePlayer='X';  //sets player as X by default//

let selectedSquares=[];  //starts an array to record moves//

function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element =>element.includes(squareNumber))) {  //this checks to see if the box is already occupied//
        let select = document.getElementById(squareNumber);
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("./images/x.png")';    //if the box is empty, the active player can have it//
        } else {
            select.style.backgroundImage = 'url("./images/o.png")';
        }
        selectedSquares.push(squareNumber + activePlayer);  //this ads the last move to the array//
        checkWinConditions();                              //checks to see if there is a win//
        if (activePlayer === 'X') {
            activePlayer = 'O';
        }else {
            activePlayer = 'X';    //switches players//
        }

        audio('./media/place_1.mp3');
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function (){computersTurn(); }, 1000);  //disables player from clicking while it's the computer's turn//
        }
        return true;
    }

    function computersTurn() {
        let success = false;
        let pickASquare;
        while(!success){
            pickASquare = String(Math.floor(Math.random() * 9));   //this allows the computer to take a turn with the use of random math & seeing if the box is occupied//
            if (placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success = true;
            };
        }
    }
}


function checkWinConditions() {
         if (arrayIncludes('0X','1X','2X')) { drawWinLine(50,100,558,100);}      //these are all the possible winning line arrays//
    else if (arrayIncludes('3X','4X','5X')) { drawWinLine(50,304,558,304);}
    else if (arrayIncludes('6X','7X','8X')) { drawWinLine(50,508,558,508);}
    else if (arrayIncludes('0X','3X','6X')) { drawWinLine(100,50,100,558);}
    else if (arrayIncludes('1X','4X','7X')) { drawWinLine(304,50,304,558);}
    else if (arrayIncludes('2X','5X','8X')) { drawWinLine(508,50,508,558);}
    else if (arrayIncludes('6X','4X','2X')) { drawWinLine(100,508,510,90);}
    else if (arrayIncludes('0X','4X','8X')) { drawWinLine(100,100,520,520);}
    else if (arrayIncludes('0O','1O','2O')) { drawWinLine(50,100,558,100);}
    else if (arrayIncludes('3O','4O','5O')) { drawWinLine(50,304,558,304);}
    else if (arrayIncludes('6O','7O','8O')) { drawWinLine(50,304,558,508);}
    else if (arrayIncludes('0O','3O','6O')) { drawWinLine(100,50,100,558);}
    else if (arrayIncludes('1O','4O','7O')) { drawWinLine(304,50,304,558);}
    else if (arrayIncludes('2O','5O','8O')) { drawWinLine(508,50,508,558);}
    else if (arrayIncludes('6O','4O','2O')) { drawWinLine(100,508,510,90);}
    else if (arrayIncludes('0O','4O','8O')) { drawWinLine(100,100,520,520);}
    else if (selectedSquares.length >=9) {
        audio('./media/tie_1.mp3');
        setTimeout (function () {resetGame();}, 1000);
    }
    
    function arrayIncludes(squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA);
        const b = selectedSquares.includes(squareB);
        const c = selectedSquares.includes(squareC);
        if (a === true && b === true && c === true) { return true;}
    }
}

function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () {body.style.pointerEvents='auto';}, 1000);
}

function audio (audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');   //uses the canvas in HTML to draw lines//
    const c = canvas.getContext ('2d');

    let x1 = coordX1,
        y1 = coordY1,
        x2 = coordX2,
        y2 = coordY2,
        x =x1,
        y =y1;

        function animateLineDrawing() {
            const animationLoop = requestAnimationFrame(animateLineDrawing);   //positions the lines//
            c.clearRect(0,0,608,608);
            c.beginPath();
            c.moveTo(x1,y1);
            c.lineTo(x,y);
            c.lineWidth = 10;
            c.strokeStyle = 'rgba(0,0,0,.8)';
            c.stroke();
            if (x1 <= x2 && y1 <= y2) {
                if (x < x2) { x += 10;}
                if (y < y2) {y += 10;}
                if (x >= x2 && y >=y2) {cancelAnimationFrame(animationLoop);}
            }
            if (x1 <= x2 && y1 >= y2) {
                if (x < x2) {x =+10;}
                if (y > y2) {y -=10;}
                if (x >= x2 && y <= y2) {cancelAnimationFrame(animationLoop);}
            }
        }

        function clear() {
            const animationLoop = requestAnimationFrame(clear);
            c.clearRect(0,0,608,608);
            cancelAnimationFrame(animationLoop);
        }
        disableClick();
        audio('./media/winGame_1.mp3');
        animateLineDrawing();
        setTimeout(function () {clear(); resetGame();}, 1000);
}

function resetGame() {
    for (let i =0; i <9; i++) {
        let square = document.getElementById(String(i));  //resets the game//
        square.style.backgroundImage='';
    }
}selectedSquares=[];
