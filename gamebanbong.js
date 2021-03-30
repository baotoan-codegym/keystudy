let c = document.getElementById('game');
let ctx = c.getContext('2d');
let x = 20 ;
let y = 20;


function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "#11ff00";
    ctx.fill();
    ctx.closePath();
}
setInterval(function (){
    ctx.clearRect(0,0,c.clientWidth,c.height);
    x+=2;
    y+=2;
    },200);
