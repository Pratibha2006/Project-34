const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var superhero;
var fly;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;

function preload() {
//preload the images here
    Background = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1350, 650);
  engine = Engine.create();
  world = engine.world; 

  // create sprites here
  ground = new Ground(675,570,1350,20);
  superhero = new Hero(200,400,5);
  fly = new Fly(superhero.body, {x:200, y:150});

  block1 = new Block(600,50);
  block2 = new Block(600,110);
  block3 = new Block(600,160);
  block4 = new Block(600,210);
  block5 = new Block(600,260);
  block6 = new Block(600,310);
  block7 = new Block(600,360);
  block8 = new Block(650,50);
  block9 = new Block(650,110);
  block10 = new Block(650,170);
  block11 = new Block(650,230);
  block12 = new Block(650,290);
  block13 = new Block(650,350);
  block14 = new Block(650,410);
  block15 = new Block(650,470);
  block16 = new Block(700,50);
  block17 = new Block(700,110);
  block18 = new Block(700,160);
  block19 = new Block(700,210);
  block20 = new Block(700,260);
  block21 = new Block(700,310);

  monster = new Monster(900, 150, 50);
}

function draw() {
  background(Background);
  Engine.update(engine);

  ground.display();
  superhero.display();
  fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  monster.display();
}

function mouseDragged(){
  Matter.Body.setPosition(superhero.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  fly.fly();
}

function keyPressed(){
  if(keyCode === 32){
      Matter.Body.setPosition(superhero.body, {x : 200, y:50});
     fly.attach(superhero.body);
  }
}
