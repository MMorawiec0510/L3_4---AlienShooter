		// JavaScript source code

var canvas
var ctx;
var x = 20;
var y = 20;
var dx = 10;

var i = 0;

function draw() {
	canvas = document.getElementById('animacja');
	ctx = canvas.getContext('2d');
		setInterval(InvadersMove, 100);
	
}
	//setInterval(Bomb,100);

/*function Bomb(x, y, velocity) {
	this.x = x;
	this.y = y;
	this.velocity = velocity;
	for (var i = 0; i < this.bombs.length; i++) {
		var bomb = this.bombs[i];
		bomb.y += dt * bomb.velocity;

	}
	ctx.fillStyle = '#ff5555';
	for (var i = 0; i < this.bombs.length; i++) {
		var bomb = this.bombs[i];
		ctx.fillRect(bomb.x - 2, bomb.y - 2, 4, 4);
	}
}*/
function InvadersDraw() {
	
	
	for (x = 20; x < canvas.width - 60; x = x + 25) {
		ctx.beginPath();
		ctx.fillRect(x, y, 20, 20);
		ctx.closePath;
		
	}
}

function InvadersMove() {
	
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		x += dx;

	if (x > (canvas.width - 20)) {
			dx = -10;

	}
	if (x < 20) {
			dx = 10;

	}
	InvadersDraw();
	
	}
