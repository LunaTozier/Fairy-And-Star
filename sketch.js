var starImg, fairyImg, bgImg;
var fairy ;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starryNight.jpg");
	
}

function setup() {
	createCanvas(800, 750);



	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,70);
	star.addImage(starImg);
	star.scale = 0.2;

	edges = createEdgeSprites();

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 70 , 5 , { restitution:0.7, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  fairy.collide(edges);

  star.x = starBody.position.x;
  star.y = starBody.position.y;

  if(star.y>470 && starBody.position.y>470){
	Matter.Body.setStatic(starBody,true);
  }
  
  
  drawSprites();

}

function keyPressed() {
	//write code here
	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 15 ; 
	}
	else if(keyCode=== LEFT_ARROW){
		fairy.x = fairy.x - 15 ;
	}
	else {
		fairy.velocityX = 0;
	}	

	if(keyCode === DOWN_ARROW){
		Matter.Body.setStatic(starBody,false);
	}
}