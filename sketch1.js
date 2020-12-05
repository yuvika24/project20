var bullet,wall,weight,speed,thickness;


function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
 weight = random(30,52);

  bullet = createSprite(50,200,50,10);
  wall = createSprite(1200,200,60,thickness,height/2);
 thickness = random(22,83);
  wall.shapecolor = color(80,80,80);

  bullet.velocityX = speed;
}

function draw() {
  background(255,255,255);
  
bullet.x =  World.mouseX;
bullet.y = World.mouseY;

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  bullet.velocityX = 0;
  var damage = 0.5 *weight * speed *speed/(thickness*thickness*thickness);
 
  if(damages>10)
  {
bullet.shapecolor = color(255,0,0);   
  }
  
  if(damage<10){
  bullet.shapecolor = color(0,255,0);
  }
  }


  drawSprites();
}