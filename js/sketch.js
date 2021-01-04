
var angle = 0;

var slider;

function setup(){
   // 描画領域のセットアップ
  createCanvas(400,400);
  slider = createSlider(0, TWO_PI, PI/6, 0.01);

}

function draw(){
  // 描画
  background(51);
  angle = slider.value();
  
  translate(200, height); //座標軸の移動
  
  stroke(0,200,200,200);
  branch(100);
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
}

