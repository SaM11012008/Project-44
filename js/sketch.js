var bg;
var bread, breadImg, breardGroup;
var heart, heartImg, heartGroup;
var carrot, carrotImg, carrotGroup;
var potato, potatoImg, potatoGroup;
var diamond, diamondImg, diamondGroup;
var rottenMeat, rottenMeatImg, fleshGroup;
var dangerSign, dangerSignImg, dangerSignGroup;
var gameState = 0;

function preload(){

    bg = loadImage("images/bg.jpg");
    breadImg = loadImage("images/bread.png");
    carrotImg = loadImage("images/carrot.png");
    dangerSignImg = loadImage("images/danger-sign.png");
    diamondImg = loadImage("images/diamond.png");
    heartImg = loadImage("images/heart.png");
    potatoImg = loadImage("images/potato.png");
    rottenMeatImg = loadImage("images/rotten meat.png");
}


function setup() {

    createCanvas(displayWidth/2+945,displayHeight/2+377);
    
    background(bg);

    //bread = createSprite(200,200);
    //bread.addImage(breadImg);
    //bread.scale = 0.5;
    //bread.visible = false;

    //carrot = createSprite(400,200);
    //carrot.addImage(carrotImg);
    //carrot.scale = 0.3;

    //potato = createSprite(600,200);
    //potato.addImage(potatoImg);
    //potato.scale = 0.7;

    //rottenMeat = createSprite(600,400);
    //rottenMeat.addImage(rottenMeatImg);
    //rottenMeat.scale = 0.3;

    //heart = createSprite(800,200);
    //heart.addImage(heartImg);
    //heart.scale = 0.2;

    //diamond = createSprite(200,400);
    //diamond.addImage(diamondImg);
    
    //dangerSign = createSprite(400,400);
    //dangerSign.addImage(dangerSignImg);
    //dangerSign.scale = 0.2;
    
 }

function draw() {

   

    drawSprites()

}