function setup() {
	createCanvas(500, 500);
}
  
function preload() {  // preload() runs once
	img = loadImage('lives.png');
  }
   
  function draw() {
	background(0);
	image(img, 25, 25, 50, 50);
  }

