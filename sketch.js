const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16, ground;
var ball, slingshot; 
var score = 0;
function setup() {
  createCanvas(1400, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 790, 1400, 20);
  stand1 = new Ground(600, 500, 400, 20)

  box1 = new Box(450, 470, 50, 60);
  box2 = new Box(500, 470, 50, 60);
  box3 = new Box(550, 470, 50, 60);
  box4 = new Box(600, 470, 50, 60);
  box5 = new Box(650, 470, 50, 60);
  box6 = new Box(700, 470, 50, 60);
  box7 = new Box(750, 470, 50, 60);
  box8 = new Box(500, 410, 50, 60);
  box9 = new Box(550, 410, 50, 60);
  box10 = new Box(600, 410, 50, 60);
  box11 = new Box(650, 410, 50, 60);
  box12 = new Box(700, 410, 50, 60);
  box13 = new Box(550, 350, 50, 60);
  box14 = new Box(600, 350, 50, 60);
  box15 = new Box(650, 350, 50, 60);
  box16 = new Box(600, 290, 50, 60);


  ball = new Ball(200, 200, 80, 80);
  slingshot = new Slingshot(ball.body, { x: 100, y: 300 });

}

function draw() {
  background(180);
  Engine.update(engine);
  text("SCORE :" + score, 750, 50);

  ground.display();
  stand1.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  box13.display()
  box14.display()
  box15.display()
  box16.display()
  
  box1.score();
  box2.score();
  box3.score();
  box4.score();
  box5.score();
  box6.score();
  box7.score();
  box8.score();
  box9.score();
  box10.score();
  box11.score();
  box12.score();
  box13.score();
  box14.score();
  box15.score();
  box16.score();

  ball.display();
  slingshot.display();
 
  keyPressed();

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    slingshot.fly();
}

function keyPressed() {
    if(keyCode === 32){
        slingshot.attach(ball.body);
    }
}