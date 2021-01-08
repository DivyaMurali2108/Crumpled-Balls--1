var rect1,rect2,rect3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	rect1=createSprite(300,350,100,10)
	rect2=createSprite(250,310,10,80)
	rect3=createSprite(350,310,10,80)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    paper=new Paper (100,600,20)
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 paper.display();
}

function KeyPressed(){
	if (keycode===up_Arrow)
	Matter.Body>setStatic(Paper,false);
}

