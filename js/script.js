let hero;
let background;
let x, y;
let dx = 50;
let dy = 50;
let health = 0;
let EnemyX = 0;
let EnemyY = 0;
let Enemy = 0;
let dhealth = 0;

function setup() {
	createCanvas(800, 800);
	EnemyX = random(400, 700);
	EnemyY = random(400, 700);
	health = 100;
}

function preload() {  // preload() runs once
	Enemy = loadImage("Enemy.jpg");
	hero = loadImage("hero.jpg");
	background = loadImage("FON.jpg");
}

function draw() {
	noStroke();
}

function draw() {
	background.resize(800, 800);
	image(background, 0, 0);
	//background(#FFFFFF);
	hero.resize(0, 100);
	image(hero, x, y);
	Enemy.resize(0, 100);
	image(Enemy, EnemyX, EnemyY);

	if (x > EnemyX) {
		EnemyX = EnemyX + 1;
	} else if (x < EnemyX) {
		EnemyX = EnemyX - 1;
	}
	if (y > EnemyY) {
		EnemyY = EnemyY + 1;
	} else if (y < EnemyY) {
		EnemyY = EnemyY - 1;
	}

	// условие поражения
	if (health == 0) {
		textSize(75);
		text("LOL", 200, 200);
	} else {
		// оставшиеся жизни
		fill('#99DE24');
		health = 100;
		rect(width - 140, 50, health, 30);

		if (x > EnemyX - 30 && x < EnemyX + 30) {
			if (y > EnemyY - 30 && y < EnemyY + 30) {
				background(0);
				fill(255);
				textSize(75);
				text("Проиграл", 200, 200);
			}
		}
	}
}

function keyPressed() {
	if (keyCode == RIGHT_ARROW) {
		x = x + dx;
	} else if (keyCode == LEFT_ARROW) {
		x = x - dx;
	} else if (keyCode == UP_ARROW) {
		y = y - dy;
	} else if (keyCode == DOWN_ARROW) {
		y = y + dy;
	}
}