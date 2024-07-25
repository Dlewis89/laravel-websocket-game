
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

document.addEventListener('keydown', function(e) {
    // console.log(e.key);

    if (playerX > 0 && playerX + playerSize < gameWidth && playerY > 0 && playerY + playerSize < gameHeight) {
        switch(e.key) {
            case 'w':
                playerY -= 5;
                break;
            case 'a':
                playerX -= 5;
                break;
            case 's':
                playerY += 5;
                break;
            case 'd':
                playerX += 5;
                break;
            default:
                break;
        }
    }  
});

function update() {
    frame++;

    ctx.clearRect(0, 0, gameWidth, gameHeight);
    ctx.fillRect(playerX, playerY, playerSize - 1, playerSize - 1);
    ctx.strokeStyle = playerColor;
    ctx.strokeRect(playerX, playerY, playerSize, playerSize);
    // console.log(frame);
}

function animate() {
    update();
    requestAnimationFrame(animate);
}

animate();