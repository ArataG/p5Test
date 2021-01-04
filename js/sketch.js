
var angle = 0;

var slider;
let button;

let red = 0;
let green = 0;
let blue = 0;
let size = 1;

function setup(){
   // 描画領域のセットアップ
  createCanvas(400,400);
  slider = createSlider(0, TWO_PI, PI/6, 0.01);
  button = createButton("bloom");
}

function draw(){
  // 描画
  background(51);
  angle = slider.value();
  
  translate(200, height); //座標軸の移動
  
  stroke(0, 255, 255);
  branch(100);


  button.mousePressed(bloom);
}



function bloom() {
   red = random(255);
   green = random(255);
   blue = random(255);
   size = random(1,10);
  
}

function branch(len){
  line(0, 0, 0, -len);

  translate(0, -len);
  if(len > 4){
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  } 
  else{
    noStroke();
    fill(red,green,blue,150);
    ellipse(0, 0, size, size);
  } 
}

