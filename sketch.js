const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paper1,ground1,box1,box2,box3;

function setup() {
	createCanvas(1300,450);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(640,425,1400,15);
	paper1 = new Paper(90,200,20);
	box1 = new DustBin(1050,405,200,20);
	box2 = new DustBin(950,365,20,100);
	box3 = new DustBin(1150,365,20,100);

	Engine.run(engine);
  
}


function draw() {
  background(0);

  ground1.display();
  paper1.display();
  box1.display();
  box2.display();
  box3.display();

  drawSprites();
 
}

function keyPressed(){
 if(keyCode === UP_ARROW){
  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-75});
 }
}

