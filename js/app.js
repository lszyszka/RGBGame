var randomColor = document.querySelector(".randomColor");
var square = document.querySelectorAll("#square");
var rightColor;

var newGame = document.querySelector(".newGame");
var message = document.querySelector(".message");

var done = 0;
var colors = [];
//random Color

colors = mixedColorSquare();

//randomize Color
function changeColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";

}

//filled array randomize colors
function mixedColorSquare() {
    var arr = [];
    for (var i = 0; i < 3; i++) {
        arr.push(changeColor());
    }
    return arr;
}

//set square color
function squareColor(color) {
    for (var i = 0; i < 3; i++) {
        square[i].style.backgroundColor = colors[i];
    }
}

//randomize color in array
function setSquareColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

//set square colors
squareColor(colors);

//set right color
rightColor = setSquareColor();
console.log(rightColor);
console.log(colors);


randomColor.innerHTML = rightColor;

//choose color
for (var i = 0; i < 3; i++) {
    square[i].addEventListener('click', function () {
        if (this.style.backgroundColor == rightColor) {
            message.innerText = "Congratulations! Correct color!";
            newGame.innerText = "Next game start...";
            done = 1;

            setTimeout(function () {
                location.reload();
            },2000);

        }
        else {
            if (done < 1) {
                message.innerText = "Ups, try again!";
                this.style.display = "none";
            }
        }
    })
}

newGame.addEventListener('click', function () {
    location.reload();
});