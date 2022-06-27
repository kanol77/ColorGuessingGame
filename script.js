const colorBox = document.querySelector('.given-color');
const options = Array.from(document.querySelectorAll('.option'));

function start() {
    let randomColor = randomizeColor();
    colorBox.innerText = randomColor;

    let lives = 2;

    let arr = [randomColor];

    for (let i = 0; i < 7; i++) {
        let color = randomizeColor();
        arr.push(color);
    }
    shuffleArray(arr);
    for (let j = 0; j < 8; j++) {
        options[j].style.backgroundColor = arr[j];
        if (randomColor == arr[j]) {
            options[j].classList.add('theOne');

            let winnerTile = document.querySelector('.theOne');

            winnerTile.addEventListener('click', () => {
                alert("That's the right color! Good Work!");
                window.location.reload();
            })
        }
        else {
            let tile = options[j];
            tile.addEventListener('click', () => {
                lives--;
                if (lives == 0) {
                    alert("You lost all your lives :-( \nBetter luck next time!");
                    window.location.reload();
                }
                else {
                    alert("Sadly that's not the right color :-( \nYou have " + lives + " lives left. \nTry again!");
                }
            })
        }
    }
}

function randomizeColor() {
    let r = randomInteger(0, 255);
    let g = randomInteger(0, 255);
    let b = randomInteger(0, 255);

    return 'RGB(' + r + ', ' + g + ', ' + b + ')';
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

start();