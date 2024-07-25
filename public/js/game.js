
const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas.getContext('2d');

const gameWidth = 480;
const gameHeight = 320;

gameCanvas.clientWidth = gameWidth;
gameCanvas.clientHeight = gameHeight;

let frame = 0;

let playerX = 100;
let playerY = 100;
const playerSize = 16;
const playerColor = 'white'

function move_player() {

}

function update() {
    frame++;

    if (playerX > 0 && playerX + playerSize < gameWidth && playerY > 0 && playerY + playerSize < gameHeight) {
        playerX++;
    }

    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx.fillRect(playerX, playerY, playerSize - 1, playerSize - 1);
    ctx.strokeStyle = playerColor;
    ctx.strokeRect(playerX, playerY, playerSize, playerSize);
    console.log(frame);
}

function animate() {
    update();
    requestAnimationFrame(animate);
}

animate();