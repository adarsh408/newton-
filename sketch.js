const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;


var engine, world;
var box1, pig1;
var backgroundImg,platform;
var chain;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(windowWidth,windowHeight);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height,width,20);
    platform = new Ground(150, height-100, 300, 250);

    box1 = new Box(1000,height-150,70,70);
    box2 = new Box(1220,height-150,70,70);
    pig1 = new Pig(1110, height-120);
    log1 = new Log(1110,height-210,300, PI/2);

    box3 = new Box(1000,height-230,70,70);
    box4 = new Box(1220,height-230,70,70);
    pig3 = new Pig(1110, height-250);

    log3 =  new Log(1110,height-290,300, PI/2);

    box5 = new Box(1110,height-310,70,70);
    log4 = new Log(1060,height-360,150, PI/7);
    log5 = new Log(1170,height-360,150, -PI/7);

    bird = new Bird(100,100);
    //log6 = new Log(100,50,45,PI/3);
    
    chain=new SlingShot(bird.body,{x:226,y:370})
 
  
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    //console.log(box2.body.position.x);
    //console.log(box2.body.position.y);
    //console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    log3.display();

    box5.display();
    log4.display();
    log5.display();
    //log6.display();

    bird.display();

    platform.display();
    chain.display();
}


function mouseDragged()
{
    if(bird.body.position.x<250){
        Matter.Body.setPosition(bird.body, {x:mouseX, y:mouseY});
    }

 
}


function mouseReleased()
{
   chain.fly();
}
function keyPressed()
{
    if (keyCode===32){
        chain.reattach(bird.body);
    }
}
