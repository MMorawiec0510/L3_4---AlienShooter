	var defaultpx = 24; //przeciwnik
	var defaultpy = 24;
	var rozmpx = 15;
	var rozmpy = 15;
	
	
	function przeciwnik() {
	
	
		ctx.beginPath();
		ctx.fillStyle="blue";
		ctx.fillRect(defaultpx,defaultpy,rozmpx,rozmpy);
		ctx.closePath;


		ctx.beginPath();
		ctx.fillStyle="blue";
		ctx.fillRect(defaultpx + 30,defaultpy,rozmpx,rozmpy);
		ctx.closePath;

		ctx.beginPath();
		ctx.fillStyle="blue";
		ctx.fillRect(defaultpx + 60,defaultpy,rozmpx,rozmpy);
		ctx.closePath;
	
}