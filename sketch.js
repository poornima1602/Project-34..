const Engine= Matter.Engine;
const World=  Matter.World;
const Bodies=  Matter.Bodies;
const Constraint= Matter.Constraint;
var bgImg;
var score=0;

function preload() {
//preload the images here
bgImg=loadImage('bg.jpg');
}

function setup() {
    canvas=createCanvas(1350, 600);
 
  engine = Engine.create();
  world = engine.world;

  superman1=new superman(200,200,90,90);
  slingshot1=new slingshot(superman1.body,{x: 150, y: 300})

  block1=new block(450,430,50,50);
  block2=new block(450,380,50,50)
  block3=new block(450,330,50,50)
  block4=new block(450,280,50,50)
  block5=new block(450,230,50,50)
  block6=new block(450,180,50,50)
  block7=new block(450,130,50,50)
  block8=new block(450,80,50,50)

  block11=new block(520,430,50,50);
  block12=new block(520,380,50,50)
  block13=new block(520,330,50,50)
  block14=new block(520,280,50,50)
  block15=new block(520,230,50,50)
  block16=new block(520,180,50,50)
  block17=new block(520,130,50,50)

  block21=new block(650,430,50,50);
  block22=new block(650,380,50,50)
  block23=new block(650,330,50,50)
  block24=new block(650,280,50,50)
  block25=new block(650,230,50,50)
  block26=new block(650,180,50,50)

  ground1=new ground(300,500,1000,15)
  ground2=new ground(850,400,100,10)

  monster1=new monster(850,300,100,100);

  Engine.run(engine)
}

function draw() {
  background("aquamarine");

  Engine.update(engine);

  superman1.display();
  slingshot1.display();
  block1.display();  
  block2.display();
  block3.display();  
  block4.display();
  block5.display();  
  block6.display();
  block7.display();  
  block8.display();

  block11.display();  
  block12.display();
  block13.display();  
  block14.display();
  block15.display();  
  block16.display();
  block17.display();

  block21.display();  
  block22.display();
  block23.display();  
  block24.display();
  block25.display();  
  block26.display();

  ground1.display();
  //ground2.display();

  monster1.display();
}
function mouseDragged(){
  Matter.Body.setPosition(superman1.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  slingshot1.fly();

}

