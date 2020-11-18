
var ground, gameState,engine, world,dustbin,paper;


function setup() {
  createCanvas(1000, 1000);

  rectMode(CENTER);


}

function draw() {
  background("purple");
  textSize(40);
  fill("yellow");
  text("MY RECIPE(Jelabi)  ", 350, 100)
  textSize(30);
  fill("white");
  text(" INGREDIENTS of JALEBI ", 50, 170)
  textSize(20);
  fill("yellow");
  text("  Maida\n  Saffron\n  Ghee\n  Sugar ", 50, 200)
  textSize(30);
  fill("white");
  text(" PROCESS of MAKING ", 50, 320)
  textSize(20);
  fill("yellow");
  text("  To make jalebi, firstly a batter is prepared using flour.\n  Then it is fermented for several hours to acquire a unique fermented flavor.\n  Then the batter is poured to spirals or concentric circles in the hot oil.\n  They are fried until crisp and then immersed in sugar syrup. ", 50, 350)
  drawSprite()
}


