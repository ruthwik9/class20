var movingRect,fixedRect;


function setup() {
  createCanvas(1200,800);
 
 fixedRect= createSprite(600, 400, 50, 80);
 fixedRect.shapeColor='green'
 fixedRect.debug=true;
 movingRect= createSprite(400,200,80,30);
 movingRect.shapeColor='green'
 movingRect.debug=true;
}

function draw() {
  background(255,255,255); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2
    && fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2
  &&movingRect.y-fixedRect.y<movingRect.width/2+fixedRect.width/2
      && fixedRect.y-movingRect.y<movingRect.width/2+fixedRect.width/2) {
   movingRect.shapeColor='red'
   fixedRect.shapeColor='red' 
  }else{
   movingRect.shapeColor='green'
   fixedRect.shapeColor='green'
  }
  drawSprites();
}