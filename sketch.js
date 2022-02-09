var sea,sea_image;
var ship,shipImg1;

function preload(){
  //uncomment the code to add animation to ship 
  //ship_moving = loadAnimation("ship-1.png","ship2.png");

  shipImg1 = loadAnimation("ship-1.png","ship-2.png");
  //shipImg1 = loadAnimation("ship-1.png");
  //shipImg1 = loadAnimation("ship-1");
  //shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  //shipImg = loadAnimation("ship-1","ship-2","ship-1","ship-2");
  //ship_image = loadAnimation("ship-1.png","ship-2,png");
  
  sea_image = loadImage("sea.png");
}

function setup(){
  createCanvas(600,600);
  background("black");

  // Moving background
  sea=createSprite(400,200);
  sea.addImage(sea_image);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;
  
}

function draw() {
  background(0);
  sea.velocityX = -5;

  //uncomment code to reset the background
  if(sea.x < 0){sea.x=sea.width/8}
 //sea.x = 0;
 //sea.x = sea.width;
 //ea.x = sea.width/8;
 //sea.y = height;

 //if(keyDown(RIGHT_ARROW)){
   //ship.position.x =  ship.position.x -5;
 //}



  drawSprites();
}