let activePlayer='X'; //initializes player as X
let selectedSquares=[];  //initializes no selection

function placeXOrO(squareNumber){
            if(!selectedSquares.some(element=>element.includes(squareNumber))) 
    {
                let select = document.getElementById(squareNumber);
                if (activePlayer==='X') {
                        select.style.backgroundImage = 'url("images/x2.png")'; //calls in custom png
                        select.style.backgroundPositionX = '9px'; // formatting needed for centering of image
                        select.style.backgroundPositionY = '9px'; // formatting needed for centering of image
                        select.style.backgroundSize = '90% 90%'; // formatting needed for better sizing
                        select.style.backgroundRepeat = 'no-repeat'; // formatting needed no repeating of bg image
                }
            else {
                select.style.backgroundImage = 'url("images/o2.png")'; //calls in custom png
                select.style.backgroundPositionX = '9px'; // formatting needed for centering of image
                select.style.backgroundPositionY = '9px'; // formatting needed for centering of image
                select.style.backgroundSize = '90% 90%'; // formatting needed for better sizing
                select.style.backgroundRepeat = 'no-repeat'; // formatting needed no repeating of bg image
            }
            selectedSquares.push(squareNumber + activePlayer);//creates record of respective player's selection history (later used in checkWInConditions)
            checkWinConditions();
            if (activePlayer === 'X') {
                activePlayer = 'O';
            }
            else {activePlayer = 'X';}

            audio('media/place.mp3'); //calls in custom audio file

            if (activePlayer === 'O') {
                disableClick();
                setTimeout(function () { computersTurn(); }, 1000);
            }
            return true;
    }

    function computersTurn() 
    {
        let success=false;
        let pickASquare;
        while (!success) {
            pickASquare = String(Math.floor(Math.random()*9));
            if (placeXOrO(pickASquare)) {
                placeXOrO(pickASquare);
            success = true;
        }
    }
}
} // ends of automatic payer function, below sets up sub functions for use above

function checkWinConditions() {
        if (arrayIncludes('0X', '1X', '2X')) {drawWinline(50,100,558,100)}//for the X moves
        else if (arrayIncludes('3X', '4X', '5X')){drawWinline(50,304,558,304)}
        else if (arrayIncludes('6X', '7X', '8X')){drawWinline(50,508,558,508)}
        else if (arrayIncludes('0X', '3X', '6X')){drawWinline(100,50,100,558)}
        else if (arrayIncludes('1X', '4X', '7X')){drawWinline(508,50,304,558)}
        else if (arrayIncludes('2X', '5X', '8X')){drawWinline(508,50,508,558)}
        else if (arrayIncludes('6X', '4X', '2X')){drawWinline(100,508,510,90)}
        else if (arrayIncludes('0X', '4X', '8X')){drawWinline(100,100,520,520)}
//for the O moves
        else if (arrayIncludes('0O', '1O', '2O')) {drawWinline(50,100,558,100)}
        else if (arrayIncludes('3O', '4O', '5O')){drawWinline(50,304,558,304)}
        else if (arrayIncludes('6O', '7O', '8O')){drawWinline(50,508,558,508)}
        else if (arrayIncludes('0O', '3O', '6O')){drawWinline(100,50,100,558)}
        else if (arrayIncludes('1O', '4O', '7O')){drawWinline(508,50,304,558)}
        else if (arrayIncludes('2O', '5O', '8O')){drawWinline(508,50,508,558)}
        else if (arrayIncludes('6O', '4O', '2O')){drawWinline(100,508,510,90)}
        else if (arrayIncludes('0O', '4O', '8O')){drawWinline(100,100,520,520)}

        else if (selectedSquares.length>=9) {
            audio('./media/tie.mp3');
            setTimeout(function () {resetGame();},500);
        } // all of the above evaluates if a winning combination of player history is acheived

        function arrayIncludes(squareA, squareB, squareC) {
            const a = selectedSquares.includes(squareA);
            const b = selectedSquares.includes(squareB);
            const c = selectedSquares.includes(squareC);

            if (a=== true && b=== true && c=== true) {return true;}
        }

    }
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function () {body.style.pointerEvents='auto';},1000);}



function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();

} //applies to all audio elements in program


    function drawWinline(coordX1, coordY1, coordX2, coordY2) {
        const canvas = document.getElementById('win-lines');
        const c=canvas.getContext('2d');
        let x1 = coordX1,
            y1 = coordY1,
            x2 = coordX2,
            y2 = coordY2,
            x=x1,
            y=y1;

        function animateLineDrawing() {
            const animationLoop = requestAnimationFrame(animateLineDrawing);
            c.clearRect(0,0,608,608);
            c.beginPath();
            c.moveTo(x1, y1);
            c.lineTo(x, y);
            c.lineWidth = 10;
            c.strokeStyle = 'rgba(236, 17, 163, 0.904)';
            c.stroke();
            if (x1 <= x2 && y1 <= y2) {
                if (x < x2) {x += 10;}
                if (y < y2) {y += 10;}
                if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
            }
            if (x1 <= x2 && y1 >= y2) {
                    if (x < x2) {x += 10;}
                    if (y > y2) {y -= 10;}
                    if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
            }
        } // automated canvas element in situation of win

function clear () {
                const animationLoop = requestAnimationFrame(clear);
                c.clearRect(0,0,608,608);
                cancelAnimationFrame(animationLoop);
            }
        
        disableClick();
        audio('./media/winGame.mp3');
        animateLineDrawing();
        setTimeout(function () {clear(); resetGame();},1000);
    } //needed to clear canvas elements upon game completion

function resetGame() {
        for (let i=0; i<9; i++) {
            let square = document.getElementById(String(i));
            square.style.backgroundImage = '';} //removes all prior modified background images

            selectedSquares=[];
        }