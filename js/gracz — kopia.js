var canvas;
var ctx;
var left = 0;
var right = 0;
var space = 0;
var score = 0;

var h = 50; //przyjmuje wysokosc do ktorej leci strzal

var i = 0;
var j = 0;

	var oldx = 0; //pocisk
	var oldy = 0;
	
	var oldplayerx = 0; //gracz
	var oldplayery = 0;
	
	var defaultpx = 24; //przeciwnik
	var defaultpy = 24;
	var rozmpx = 40;
	var rozmpy = 40;
	
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}


function draw() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	setInterval(gracz, 100);
	
}

//var x = canvas.width / 2;
var x = 0;
var y = 360; //360

window.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 37:
        left = 1;
      break;
    
      case 39:
        right = 1;
      break;
   
      case 32:
        space = 1;
      break;
   
    }
  }, false);

function gracz() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	przeciwnik();
    
   
    if (left == 1)
    {
        x = x - 15;
        left = 0;
    }

    if (right == 1)
    {
        x = x + 15;
        right = 0;
    }
	
	if (space == 1)
    {
	
	j=0; 
	stop = 0;
	var strzalInt = setInterval(strzal, 100);
	
    }


	if (x > (canvas.width - 25)) {
		x = x -10;
		
	}
	if (x < 5) {
		x = x + 10;
		
	}
	ctx.beginPath();

    ctx.fillStyle="green";
	ctx.fillRect(x,y,20,20);
	ctx.closePath;
}

function losuj09() {
    return Math.floor(Math.random() * 10);
}

/*function przeciwnik() {
	

	var kierunek = 0;
	
		ctx.beginPath();
		ctx.fillStyle="blue";
		ctx.fillRect(defaultpx,defaultpy,rozmpx,rozmpy);
		ctx.closePath;
	/*
	while (1)
	{
		kierunek = losuj09();
		if (kierunek == 0) {
		ctx.beginPath();
		ctx.fillStyle="blue";
		ctx.fillRect(defaultx,defaulty,40,40);
		ctx.closePath;
		} else if (kierunek == 1) {
		ctx.beginPath();
		ctx.fillStyle="black";
		ctx.fillRect(defaultx,defaulty,40,40);
		ctx.closePath;
		
		ctx.beginPath();
		ctx.fillStyle="blue";
		ctx.fillRect(defaultx+20,defaulty,40,40);
		ctx.closePath;
		} else if (kierunek == 2) {
		ctx.beginPath();
		ctx.fillStyle="black";
		ctx.fillRect(defaultx,defaulty,40,40);
		ctx.closePath;
		
		ctx.beginPath();
		ctx.fillStyle="blue";
		ctx.fillRect(defaultx-20,defaulty,40,40);
		ctx.closePath;
		}
	}
	
	
}*/

function strzal() {
	
		
	var posx = x+8;
	var posy = y-30;
	
	if (j<h || stop == 1)
	{
	j = j+5;
	} else {
		space = 0;
		j = 0;
		stop = 1;
		clearInterval(strzalInt);
	}

		ctx.beginPath();
		ctx.fillStyle="black";
		ctx.fillRect(posx,posy,4,25);
		ctx.closePath;
		
		//sleep(200);
		
		ctx.beginPath();
		ctx.fillStyle="red";
		ctx.fillRect(posx,posy-j,4,25);
		ctx.closePath;
		
	document.getElementById("testy1").innerHTML = posx;
	document.getElementById("testy2").innerHTML = posy-j;
	document.getElementById("testy3").innerHTML = defaultpx;
	document.getElementById("testy4").innerHTML = defaultpy;
	document.getElementById("testy5").innerHTML = rozmpx;
	document.getElementById("testy6").innerHTML = rozmpy;
	document.getElementById("score").innerHTML = score;
	
	if (posy+j > h) {
		clearInterval(strzalInt);
	}
	
	if (defaultpx <= posx < defaultpx+rozmpx && posy-j <= defaultpy+rozmpy)
	{
		alert("trafiony!");
	}
	
		if (posx > 20)
	{
		score++;
	}
	
	
}