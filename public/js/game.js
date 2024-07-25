
const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas.getContext('2d');

gameCanvas.clientWidth = 480;
gameCanvas.clientHeight = 320;

let frame = 0;

function update() {
    frame++;
    ctx.clearRect(0, 0, 480, 320);
    ctx.fillRect(100, 100, 16, 16);
    ctx.strokeStyle = 'white';
    ctx.strokeRect(100, 100, 16, 16);
    console.log(frame);
}

function animate() {
    update();
    requestAnimationFrame(animate);
}

animate();