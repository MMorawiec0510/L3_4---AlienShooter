var canvas;
var ctx;
var left = 0;
var right = 0;
var space = 0;
var score = 0;

var h = 50; //przyjmuje wysokosc do ktorej leci strzal

var i = 0;
var j = 0;
var k = 0;

var predkosc = 100;
var poziom = 1;

	var oldx = 0; //pocisk
	var oldy = 0;
	
	var posx = 0;
	var posy = 0;
	
var strzela = 0;

var pospx = 0;
var pospy = 0;
	
	var oldplayerx = 0; //gracz
	var oldplayery = 0;
	
	var defaultpx = 24; //przeciwnik
	var defaultpy = 24;
	var rozmpx = 20;
	var rozmpy = 20;
		
	var przeciwnikRuchX = 1;
	
	
	var idprzeciwnik = 0;
	
	var kkk = 0;
	
	var kolor = ['gold','black','orange','orange','black','gold'];
	
	var pdisabled = [0,1,0,0,1,0];
	
	const przeciwnicy = [0, 50, 100, 150, 200, 250];
	
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}

function reload() {
	location.reload();
}

function draw() {
	canvas = document.getElementById('canvas');
	ctx = canvas.getContext('2d');
	window.graczInt = setInterval(gracz, predkosc);
	window.rysujpociskiInt = setInterval(rysujpociski, 100);
	
	
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
		czyStrzela();
		strzela = 1;
	
      break;
   
    }
  }, false);
  
  
  /*function uzupelnijTablice() {
	  var j=0;
	  for (int i=0; i<przeciwnicy.length; i++) {
		  j+=60;
		  przeciwnicy[i] = defaultpx + 60;
	  }
	  
  }*/    /////// Tworzenie przeciwnikow w petli /////

 
function stopStrzal() {
	clearInterval(window.strzalInt);
}
function stopPocisk() {
	clearInterval(window.pociskInt);
}

function rysujPrzeciwnika() {
	//przeciwnik();
	//przeciwnik2();
	//przeciwnik3();
	//przeciwnik4();
	//przeciwnik5();
	//przeciwnik6();
}
var timer;
function rysujpociski() {
	pocisk(0);
	rysujpocisk();
	pocisk(100);
	rysujpocisk();
	pocisk(150);
	rysujpocisk();
	pocisk(250);
	rysujpocisk();
}
function gracz() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);   
	// --- poprzednia wersja przeciwników ---
	//przeciwnik();
	
	
	enemy(kolor[0], 0);
	
	enemy(kolor[1], 50);
	enemy(kolor[2], 100);
	enemy(kolor[3], 150);
	enemy(kolor[4], 200);
	enemy(kolor[5], 250);
	
	
	
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

/*   --- poprzednia wersja przeciwników (M. Morawiec) ---
function przeciwnik() {
	
	
		ctx.beginPath();
		ctx.fillStyle="orange";
		ctx.fillRect(defaultpx,defaultpy,rozmpx,rozmpy);
		ctx.closePath;
		
		//for (int i=0; i<3; i++) {
		//ctx.beginPath();
		//ctx.fillStyle="orange";
		//ctx.fillRect(przeciwnicy[i],defaultpy,rozmpx,rozmpy);
		//ctx.closePath;
		//}  /////// Tworzenie przeciwnikow w petli /////
	
	
	
}*/
//function rysujpocisk();



//   --- nowa wersja przeciwników (mm) ---
function enemy(kolor, offset) {
	
		ctx.beginPath();
		ctx.fillStyle=kolor;
		ctx.fillRect(defaultpx + offset,defaultpy,rozmpx,rozmpy);
	ctx.closePath;
	
	
		defaultpx += przeciwnikRuchX;
	
		if (defaultpx <= 0 )
		{
			przeciwnikRuchX = -przeciwnikRuchX;
		}
		
		
		if (defaultpx + 275 >= canvas.width)
		{
			przeciwnikRuchX = -przeciwnikRuchX;
	}

	
	
}
function pocisk(offset) {

	pospx = defaultpx + offset + 8;
	pospy = defaultpy + 30;
	k = k + 5;
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.fillRect(pospx, pospy + k, 4, 25);
	ctx.closePath;

	//clearInterval(window.pociskInt);
}
function rysujpocisk() {
	window.pociskInt = setInterval(pocisk, 10);
}
///koniec przeciwników (mm)
/*function czyPocisk() {

	k = 0;
	pospx = x + 8;
	pospy = y - 30;
	clearInterval(window.pociskInt);
	window.pociskInt = setInterval(pocisk, 5);
}
function pocisk() {
	pospx = defaultpx + offset + 8;
	pospy = defaultpy + 30;
	if (pospy - k <= 0) {
		clearInterval(window.pociskInt);

		
	}
	else {
		k = k + 5;
		ctx.beginPath();
		ctx.fillStyle = "white";
		ctx.fillRect(pospx, pospy + k, 4, 25);
		ctx.closePath;

	}
}*/
function czyStrzela() {
	
	if (strzela == 1) {
	//alert("nie mozna strzelic");	
	} else {
		j=0;
		posx = x+8;
		posy = y-30;
		clearInterval(window.strzalInt);
		window.strzalInt = setInterval(strzal, 5);
	}
}



function strzal() {

	if (posy-j <= 0) 
	{
		clearInterval(window.strzalInt);
		strzela = 0;
		j=0;
	} else {
	
	j = j+5;	
	
		

		
		//sleep(200);
		
		ctx.beginPath();
		ctx.fillStyle="red";
		ctx.fillRect(posx,posy-j,4,25);
		ctx.closePath;
		
		
	//document.getElementById("testy2").innerHTML = przeciwnicy[5];
	//document.getElementById("testy2").innerHTML = przeciwnicy[1];
	//document.getElementById("testy3").innerHTML = przeciwnicy[2];
	//document.getElementById("testy3").innerHTML = przeciwnicy[3];
	//document.getElementById("testy3").innerHTML = przeciwnicy[4];
	//document.getElementById("testy3").innerHTML = przeciwnicy[5];
	
	
	
				if (defaultpy+rozmpy > posy-j > 0) {
					
					
	
					
				if (posx > defaultpx+przeciwnicy[0] && posx < defaultpx+przeciwnicy[0]+rozmpx && pdisabled[0] == 0)
				{
					score++;
					strzela = 0;
					j=0;
					stopStrzal();
					clearInterval(window.strzalInt);
					window.strzalInt = false;
					kolor[0] = 'black';
					pdisabled[0] = 1;
				}	

				if (posx > defaultpx+przeciwnicy[1] && posx < defaultpx+przeciwnicy[1]+rozmpx && pdisabled[1] == 0)
				{
					score++;
					strzela = 0;
					j=0;
					stopStrzal();
					clearInterval(window.strzalInt);
					window.strzalInt = false;
					kolor[1] = 'black';
					pdisabled[1] = 1;
				}	
				
				if (posx > defaultpx+przeciwnicy[2] && posx < defaultpx+przeciwnicy[2]+rozmpx && pdisabled[2] == 0)
				{
					score++;
					strzela = 0;
					j=0;
					stopStrzal();
					clearInterval(window.strzalInt);
					window.strzalInt = false;
					kolor[2] = 'black';
					pdisabled[2] = 1;
				}	
				
				if (posx > defaultpx+przeciwnicy[3] && posx < defaultpx+przeciwnicy[3]+rozmpx && pdisabled[3] == 0)
				{
					score++;
					strzela = 0;
					j=0;
					stopStrzal();
					clearInterval(window.strzalInt);
					window.strzalInt = false;
					kolor[3] = 'black';
					pdisabled[3] = 1;
				}	
				
				if (posx > defaultpx+przeciwnicy[4] && posx < defaultpx+przeciwnicy[4]+rozmpx && pdisabled[4] == 0)
				{
					score++;
					strzela = 0;
					j=0;
					stopStrzal();
					clearInterval(window.strzalInt);
					window.strzalInt = false;
					kolor[4] = 'black';
					pdisabled[4] = 1;
				}	
					
				if (posx > defaultpx+przeciwnicy[5] && posx < defaultpx+przeciwnicy[5]+rozmpx && pdisabled[5] == 0)
				{
					score++;
					strzela = 0;
					j=0;
					stopStrzal();
					clearInterval(window.strzalInt);
					window.strzalInt = false;
					kolor[5] = 'black';
					pdisabled[5] = 1;
				}	
				
				
				
				document.getElementById("score").innerHTML = score;
				
				
				/*if (posx > 24 && posx < 64) {
				score++;
				strzela = 0;
				document.getElementById("score").innerHTML = score;
				j=0;
				stopStrzal();
				clearInterval(window.strzalInt);
				window.strzalInt = false;
				} */
				
			}
			
			
			if (score == 4)
			{
				
				document.getElementById("level").innerHTML = 'LEVEL 2';	
				pdisabled[0] = 0;
				pdisabled[1] = 0;
				pdisabled[2] = 0;
				pdisabled[3] = 0;
				pdisabled[4] = 0;
				pdisabled[5] = 0;
				kolor = ['gold','orange','gold','orange','gold','orange'];
				//predkosc = 40;
				//changeLevel();
				poziom = 2;
			}
			
			if (score >= 10)
			{
				
				theEnd();
			}
		
}
}

/*
function changeLevel() {
				clearInterval(window.graczInt);
				window.graczInt = false;
				window.graczInt = setInterval(gracz, predkosc);
}*/



function theEnd() {
				clearInterval(window.strzalInt);
				window.strzalInt = false;
				clearInterval(window.graczInt);
				window.graczInt = false;
				document.getElementById("theend").innerHTML = 'KONIEC GRY';
}