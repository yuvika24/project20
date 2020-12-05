var car,wall,weight,speed;


function setup() {
  createCanvas(800,400);

  speed = random(55,90);
 weight = random(400,1500);

  car = createSprite(50,200,40,40);
  wall = createSprite(1500,200,60,height/2);
  wall.shapecolor(80,80,80);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}