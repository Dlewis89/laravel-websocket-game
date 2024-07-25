
const gameCanvas = document.getElementById('game-canvas');
const ctx = gameCanvas.getContext('2d');

gameCanvas.clientWidth = 480;
gameCanvas.clientHeight = 320;

ctx.fillRect(100, 100, 16, 16);
ctx.strokeStyle = 'white';
ctx.strokeRect(100, 100, 16, 16)