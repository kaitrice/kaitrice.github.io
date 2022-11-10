var heading = document.querySelector("h1");
var displayColor = document.getElementById("colorDisplay");
var displayScore = document.getElementById("score");
var selected = document.getElementsByClassName("selected");
var sqrs = document.querySelectorAll(".square");

var levels = document.querySelectorAll(".difficulty");
var easy = document.getElementById("easy");
var med = document.getElementById("medium");
var hard = document.getElementById("hard");
var numSqrs = 3;
easy.classList.add("selected");


var mode = document.querySelectorAll(".game");
var rgbBtn = document.getElementById("rgb");
var hexBtn = document.getElementById("hex");
var gameMode = "RGB";
//rgbBtn.classList.add("selected");

var reset = document.getElementById("reset");

var colors = [];
var winColor;
var userColor;

var pts = 3;
var score = 0;

initialize(numSqrs, gameMode);

/*
Function: initialize
Parameters:
    n
    mod
Returns: null
    start gameplay
*/
function initialize(n, mod){
    gameReset(n, mod);
}

/*
Function: setupLevels
Parameters:
    none

Returns: null
    set numSqrs according to level chosen
*/
easy.addEventListener("click", function(){
    //level = "easy";
    numSqrs = 3;

    med.classList.remove("selected");
    hard.classList.remove("selected");
    this.classList.add("selected");

    score = 0;
    displayScore.textContent = score;
    
    gameReset(numSqrs, gameMode);
});

med.addEventListener("click", function(){
    //level = "med";
    numSqrs = 6;

    easy.classList.remove("selected");
    hard.classList.remove("selected");
    this.classList.add("selected");

    score = 0;
    displayScore.textContent = score;

    gameReset(numSqrs, gameMode);
});

hard.addEventListener("click", function(){
    //level = "easy";
    numSqrs = 9;

    easy.classList.remove("selected");
    med.classList.remove("selected");
    this.classList.add("selected");

    score = 0;
    displayScore.textContent = score;
    
    gameReset(numSqrs, gameMode);
});

/*
Function: setupMode
Parameters:
    none

Returns: null
    set gameMode to either rgb or hex
*/
rgbBtn.addEventListener("click", function(){
    gameMode = "RGB";

    hexBtn.classList.remove("selected");
    this.classList.add("selected");

    score = 0;
    displayScore.textContent = score;

    gameReset(numSqrs, gameMode);
});

hexBtn.addEventListener("click", function(){
    gameMode = "HEX";

    rgbBtn.classList.remove("selected");
    this.classList.add("selected");

    score = 0;
    displayScore.textContent = score;

    gameReset(numSqrs, gameMode);
});

/*
Function: setupSqrs
Parameters:
    none

Returns: null
    set squares
*/
function setupSqrs(n){
    for (var i = 0; i < sqrs.length; i++){
        if (colors[i]){
            sqrs[i].style.display = "block";
            sqrs[i].style.background = colors[i];
        } else {
            sqrs[i].style.display = "none";
        }
    }
}

/*
Function: gamePlay()
Parameters:
    none

Returns: null
    set square gameplay
*/

/*
Function: gameReset
Parameters:
    none

Returns: null
    resets gameplay
*/
function gameReset(n, mod){
    changeColor("#09cb30");
    setColors(n, mod);
    pickColor();
    displayColor.textContent = winColor;
    setupSqrs(n);

    switch(numSqrs){
        case 3:
            pts = 3;
            break;
        case 6: 
            pts = 6;
            break;
        case 9: 
            pts = 9;
            break;
        default:
            pts = 3;
    }
    displayScore.textContent = "Score: " + score;

    for(var i = 0; i < sqrs.length; i++){
        sqrs[i].addEventListener("click", function(){
            userColor = this.style.backgroundColor;

            if(userColor == winColor){
                winReset();
            } else {
                pts--;
                this.style.background = "#2d2d2d";
            }
            displayScore.textContent = "Score: " + score;
        });
    }
    
    
}

/*
Function: winReset
Parameters:
    none

Returns: null
    user choice, resets game board or show winning board
*/
function winReset(){
    score += pts;
    displayScore.textContent = "Score: " + score;
    if (confirm("You Won! Play again?")){
        gameReset(numSqrs, gameMode);
    } else {
        reset.textContent = "Play Again?";

        for(var i = 0; i < sqrs.length; i++){
            sqrs[i].style.background = winColor;
        }

        changeColor(winColor);
    }
}

// set click for reset button
reset.addEventListener("click", function(){
    gameReset();
});

/*
Funciton: getRBG()
Parameters: 
    null

Returns: randomized rgb value
*/
function getRGB() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}

/*
Funciton: getHEX()
Parameters: 
    null

Returns: randomized hex value #000000
*/
function getHEX(){
    var digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
    var hexidecimal = "#";

    while (hexidecimal.length < 7){
        hexidecimal += digits[Math.floor(Math.random() * digits.length)];
    }

    return hexidecimal;
}


/*
Funciton: setColors()
Parameters: 
    n
    mod

Returns: Array of n mod color values
*/
function setColors(n, mod){
    if (mod == "RGB"){
        for (var i = 0; i < n; i++){
            colors[i] = getRGB();
        }
    } else {
        for (var i = 0; i < n; i++){
            colors[i] = getHEX();
        }
    }

    return colors;
}

/*
Function: pickColor
Parameters:
    null

Returns: value of color array at a random index
*/
function pickColor(){
    var index = Math.floor(Math.random() * colors.length);
    winColor = colors[index];

    return winColor;
}

/*
Function: changeColor 
Parameters:
    clr

Returns: null
    sets all color to clr
*/
function changeColor(clr){
    heading.style.background = clr;
    displayScore.style.color = clr;
    reset.style.color = clr;

    for (var i = 0; i < levels.length; i++){
        levels[i].style.color = clr;
    }
    for (var i = 0; i < mode.length; i++){
        mode[i].style.color = clr;
    }

    selected[0].style.background = clr;
    selected[0].style.color = "#fff";
    //selected[1].style.background = clr;
    //selected[1].style.color = "#fff";
}
