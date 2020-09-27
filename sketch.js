
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var ground, paper;
var dustbinImage, dustbin;

function preload()
{
	dustbinImage = loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height-35, width, 10);

	paper = new Paper();

	dustbin = createSprite(995,580,20,20);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.5;

	dustbin1 = new Dustbin(940,600,5,120);
	dustbin2 = new Dustbin(995,655,115,5);
	dustbin3 = new Dustbin(1050,600,5,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
	ground.display();
	paper.display();
	dustbin1.display();
	dustbin2.display();
	dustbin3.display();
  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:85,y:-85});
		Matter.Body.setStatic(paper, false);
	}
}
