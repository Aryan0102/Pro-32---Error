const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, slingholder
var platform1, platform2

var block1 = []
var block2 = []

var polygon,slingShot;
var score = 0;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(0,800,1600,10);
  platform1 = new Ground (330,635,200,10);
  platform2 = new Ground (630,430,200,10);
  slingholder = new Ground (75,775,150,150);

  for (var x = 250; x <= 410; x = x + 20){
    block1.push(new Box(x,620,20,20));
  }

  for (var x = 260; x <= 400; x = x + 20){
    block1.push(new Box(x,600,20,20));
  }

  for (var x = 270; x <= 390; x = x + 20){
    block1.push(new Box(x,580,20,20));
  }

  for (var x = 280; x <= 380; x = x + 20){
    block1.push(new Box(x,560,20,20));
  }

  for (var x = 290; x <= 370; x = x + 20){
    block1.push(new Box(x,540,20,20));
  }


  for (var x = 550; x <= 710; x = x + 20){
    block2.push(new Box(x,415,20,20))
  }

  for (var x = 560; x <= 700; x = x + 20){
    block2.push(new Box(x,395,20,20))
  }
  
  for (var x = 570; x <= 690; x = x + 20){
    block2.push(new Box(x,375,20,20))
  }
  
  for (var x = 580; x <= 680; x = x + 20){
    block2.push(new Box(x,355,20,20))
  }

  for (var x = 590; x <= 670; x = x + 20){
    block2.push(new Box(x,335,20,20))
  }

  polygon = new Polygon(50,200,35,35);
  
  slingShot = new SlingShot(polygon.body,{x:100,y:625});

  Engine.run(engine);

}

function draw() {

  background(0);  
  Engine.update(engine)

  ground.display();
  platform1.display();
  platform2.display();
  slingholder.display();

  for (var j = 0; j < block1.length; j++){
    block1[j].display();
    block1[j].score();
  }

  for (var j = 0; j < block2.length; j++){
    block2[j].display();
    block2[j].score();
  }

  polygon.display();
  slingShot.display();

  fill("white");
  textSize(32);
  text("Score: " + score, 650,40 );

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
  if(keyCode === 32){
      slingShot.attach(polygon.body);
  }
}