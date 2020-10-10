var wall, thickness;
var bullet, speed, weight;



function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);
  
  bullet = createSprite(50, 200, 40, 40);
  bullet.shapeColor = "White"
  //bullet.velocityX = speed;
  
  wall = createSprite(1500,200,thickness, height/2);
  wall.shapeColor = "Pink"

}

function draw() {
  background("Black");  
  
  bullet.velocityX = speed;



  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    
    if(damage > 10)
    {
      wall.shapeColor = "Crimson";
    }
    
    if(damage < 10)
    {
      wall.shapeColor = "LightGreen";
    }
  }



  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if(bulletRightEdge>= wallLeftEdge){
    return true
  }
  return false 
}