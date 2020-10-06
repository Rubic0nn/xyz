
var movingRect,fixedRect;

function setup() {
  createCanvas(400,400);

  movingRect=createSprite(200,200,30,80);
  fixedRect=createSprite(200,298,30,50)
  movingRect.debug=true;
  fixedRect.debug=true;



}

function draw() {
  background(0); 
  movingRect.y=World.mouseY;
  movingRect.x=World.mouseX;
  

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    &&fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }


  drawSprites();
  

}
