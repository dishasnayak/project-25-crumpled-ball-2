const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//variables
var paper1,dustbin1,dustbin2,dustbin3,groundSprite

function preload(){
  //paper.image = loadImage("paper.png");
  dustbin1image=loadImage("dustbin.png")
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
  
  //Create the Bodies Here
  //paper
   paper1= new Paper(200,200,60)

  //dustbin
    dustbin1 = new Dustbin(610,660, 100, 20);
    dustbin2 = new Dustbin(550,620,20,100);
    dustbin3 = new Dustbin(670,620,20,100)

  

  //ground
  groundSprite=createSprite(width/2, height-35, width,10);
  groundSprite.shapeColor=color("yellow")

  groundSprite= new Ground(400,680,800,20)


	Engine.run(engine);
  
}
function draw() {
  
  rectMode(CENTER);
  
  background(0);
  
  Engine.update(engine);
  imageMode(CENTER);
  image( dustbin1image,550,550,250,250)

    
  paper1.display();
  groundSprite.display();
 
  

  

  
}
function keyPressed(){
  if (keyCode === UP_ARROW )
   {
    Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 15,y: -15})
  }
}
