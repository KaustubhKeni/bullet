var bullet,wall,thickness;
var speed,weight;








function setup() {
  createCanvas(1600,400);
thickness=random(22,83);
  speed=random(223,231);
weight=random(30,52);
bullet=createSprite(50, 200, 20 ,10);
bullet.shapeColor='white';
 wall=createSprite(1500, 200, thickness,400);
 wall.shapeColor="grey";

}

function draw() {
    
  background(0,0,0);
  //bullet.velocityX = speed ;
 
 bullet.debug=true;
 
 
 collide(wall,bullet);
 bullet.velocityX = speed ;
 wall.depth=bullet.depth;
 //bullet.depth=bullet.depth+1;
 drawSprites();
}




