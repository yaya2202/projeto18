var mario, mario_img;
var fundo, fundo_img;
var moeda, moeda_img;
var placar = 0;
var moedaGrupo;
var point;

function preload(){
    mario_img = loadImage("mario.png");
    fundo_img = loadImage("fundo2.png");
    moeda_img = loadImage("moeda3.png");
    point = loadSound("vibrant_game.mp3");
}

function setup(){
    createCanvas(windowWidth,windowHeight);
    fundo = createSprite(50,height-450);
    fundo.addImage(fundo_img);
    fundo.velocityX = -4;
    mario = createSprite(200,height-350);
    mario.addImage(mario_img);
    mario.scale =  0.1; 

    moedaGrupo = new Group();
}

function draw(){
    background("lightgray");
    if(fundo.x < 0){
        fundo.x = fundo.width/2;
    }
    mario.x = World.mouseX;
    //if(keyDown("up")){
      //  mario.velocityY = -6;

    //}
    //mario.velocityY += 0.5;
    if(mario.isTouching(moedaGrupo)){ 
        placar += 1;
        point.play();
        moedaGrupo.destroyEach();
    }
    moeda();
    drawSprites();
    textSize(12);
    textFont("arial Black");
    text("Pontuação: " + placar, 200,30); 
}

function moeda() {
    if(frameCount%100 === 0){
    var moeda = createSprite(300,Math.round(random(250, 300)), 10, 10);
    moeda.addImage(moeda_img);
    moeda.velocityX = -2;
    //moeda.lifetime = 150;
    moeda.scale = 0.3;
    moedaGrupo.add(moeda);
}
}