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


	function InvadersMove() {

		ctx.clearRect(0, 0, canvas.width, canvas.height);
		x += dx;

		if (x > (canvas.width - 20)) {
			dx = -10;

		}
		if (x < 20) {
			dx = 10;

		}
		ctx.beginPath();
		ctx.fillRect(x, y, 20, 20);
		ctx.closePath;


	}
