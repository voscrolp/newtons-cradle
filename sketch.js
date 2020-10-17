
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2, bob3, bob4, bob5;
var frame;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(1000, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	frame = new Frame(width/2,200,400,20);

	bob1 = new Bob(frame.body.position.x-100,frame.body.position.y+250,25);
	bob2 = new Bob(frame.body.position.x-50,frame.body.position.y+250,25);
	bob3 = new Bob(frame.body.position.x,frame.body.position.y+250,25);
	bob4 = new Bob(frame.body.position.x+50,frame.body.position.y+250,25);
	bob5 = new Bob(frame.body.position.x+100,frame.body.position.y+250,25);
	
	rope1 = new Chain(bob1.body, frame.body,-100,0);
	rope2 = new Chain(bob2.body,frame.body,-50,0);
	rope3 = new Chain(bob3.body, frame.body,0,0);
	rope4 = new Chain(bob4.body, frame.body,50,0);
	rope5 = new Chain(bob5.body,frame.body,100,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  frame.display();
  
  rope1.display();
  bob1.display();

  rope2.display();
  bob2.display();

  rope3.display();
  bob3.display();

  rope4.display();
  bob4.display();

  rope5.display();
  bob5.display();

  drawSprites();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:0});
	}
}



