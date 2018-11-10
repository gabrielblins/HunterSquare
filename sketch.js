var x = 25;
var y = 25;
var raioe = 25;
var r = 375;
var s = 375;
var pontos = 0;
var t = 0;
var tempo = 0 ;
var colisao = false;
var tela = 0;
var hunt;
var jungle;
var end;

function preload(){
hunt = loadImage("Images/hunt.png");
jungle = loadImage("Images/jungle.png");
end = loadImage("Images/end.png");
}

function setup(){
createCanvas(400,400);
background(220);
frameRate(60);
}

function draw(){
if(tela == 0){
image(hunt,0,0,400,400);
textSize(40);
textStyle(BOLD);
fill(255,20,20);
text("HUNTER SQUARE",25,40);
textSize(20);
fill(0);
text("pressione ENTER para jogar",60,380);
if(keyIsDown(ENTER)){
tela = 1;
}
}else{
if(tempo<60){
image(jungle,0,0,400,400);
rectMode(CENTER);
t++
tempo = Math.floor(t/60);
if(keyIsDown(UP_ARROW)){
y-=5;
}
if(keyIsDown(DOWN_ARROW)){
y+=5;
}
if(keyIsDown(LEFT_ARROW)){
x-=5;
}
if(keyIsDown(RIGHT_ARROW)){
x+=5;
}
if(keyIsDown(82)){
tempo = 61;
}

if(dist(x,y,r,s) < 2*raioe){
	if(!colisao){
	  colisao = true
	  r = random(0,350);
	  s = random(0,350);
	  pontos++;
	}
}else{
colisao = false
}
fill(89,113,99);
ellipse(r,s,2*raioe,2*raioe);



fill(212,198,158);
rect(x,y,2*raioe,2*raioe);

textSize(20);
textStyle(BOLD);
fill(255);
text("Tempo: "+tempo,15,25);
text("Pontos: "+pontos,300,25);
}else{
background(0);
image(end,0,50);
textSize(50);
textStyle(BOLD);
fill(240,230,140);
text("Fim de Jogo",50,200);
textSize(20);
fill(255,255,255);
text("Pontuação total: "+pontos,100,240);

if(keyIsDown(ENTER)){
pontos = 0;
t = 0;
tempo = Math.floor(t/60);
r = 375;
s = 375;
x = 25;
y = 25;
}
}
}
}
