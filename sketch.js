var car, wall;
var speed, weight;



function setup() {
  createCanvas(1600,400);
 
  speed = random(55,90);
  weight = random(400,1500);
  
  car = createSprite(50, 200, 40, 40);
  car.shapeColor = "White"
  //car.velocityX = speed;
  
  wall = createSprite(1500,200,60, height/2);
  wall.shapeColor = "Pink"

}

function draw() {
  background("Black");  
  
  car.velocityX = speed;



  if(wall.x - car.x < (car.width/2 + wall.width/2))
  {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;
    if(deformation > 180)
    {
      car.shapeColor = "Crimson";
    }
    if(deformation < 180 && deformation > 100 )
    {
      car.shapeColor = "LightGoldenRodYellow";
    }
    if(deformation < 100)
    {
      car.shapeColor = "LightGreen";
    }
  }



  drawSprites();
}