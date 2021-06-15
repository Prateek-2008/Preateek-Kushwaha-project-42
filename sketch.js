var spacecraft;
var spacecraftImage,spacecraftGoImage,spacecraftLeftImage,spacecraftRigthImage;

var backgroundImage;

var iss;
var issImage;



function preload(){
  spacecraftImage=loadImage("spacecraft1.png");
  spacecraftGoImage=loadImage("spacecraft2.png");
  spacecraftLeftImage=loadImage("spacecraft3.png");
  spacecraftRigthImage=loadImage("spacecraft4.png");

  backgroundImage=loadImage("spacebg.jpg");

  issImage=loadImage("iss.png");
  
}

function setup() {
  createCanvas(800,700);
  
  iss=createSprite(400, 210, 50, 50);
  iss.addImage("staying",issImage);
  iss.scale=0.8;

  spacecraft=createSprite(400,630,50,50);
  spacecraft.addImage("staying",spacecraftImage);
  spacecraft.addImage("going front",spacecraftGoImage);
  spacecraft.addImage("going left",spacecraftLeftImage);
  spacecraft.addImage("going rigth",spacecraftRigthImage);
  spacecraft.scale=0.3;

  spacecraft.depth=iss.depth;
  iss.depth=iss.depth+11


}

function draw() {
  background(backgroundImage);  

  var hasDocked=false;

  if(!hasDocked){ 
    spacecraft.x = spacecraft.x + random(-1,1);

    if(keyDown(LEFT_ARROW)){
      spacecraft.changeImage("going left",spacecraftLeftImage);
      spacecraft.x=spacecraft.x+5;
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.changeImage("going rigth",spacecraftRigthImage);
      spacecraft.x=spacecraft.x-5;
    }

    if(keyDown(UP_ARROW)){
      spacecraft.changeImage("going front",spacecraftGoImage);
      spacecraft.y=spacecraft.y-5;
    }

    if(keyDown(DOWN_ARROW)){
      spacecraft.changeImage("staying",spacecraftImage);
      spacecraft.y=spacecraft.y+5;
    }

  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked=true; 
    textSize(25); 
    fill("white"); 
    text("Docking Successful",200,300)
  }

  drawSprites();
}