var drops = [];
var windspeed = 0;
var grav = 0.02;
var len;
var modes = [6000, 5000, 4500, 2300];
var bg = [[230, 230, 250], [190, 190, 243], [147, 147, 235], [126, 126, 231]];
var mode = modes[0], nmode = 0;

function setup() {  
  createCanvas(windowWidth, windowHeight);
  len = Math.floor(windowWidth*windowHeight/10000*2);
  for (var i = 0; i < len; i++) {
    drops[i] = new Drop();
  }
}

function draw() {
  // resizeCanvas(windowWidth, windowHeight);
  background(bg[nmode][0], bg[nmode][1], bg[nmode][2]);
  windspeed = map(mouseX, 0, width, -0.05, 0.05);
  // grav = map(mouseY, 0, height, -0.05, 0.05);
//   windspeed += random(-0.1, 0.1);
  for (var i = 0; i < drops.length; i++) {
    drops[i].fall();
    drops[i].show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  len = Math.floor(windowWidth*windowHeight/mode);
  while (drops.length != len){
    if (drops.length < len) drops.push(new Drop());
    else drops.pop();
  }
}

function mouseClicked(){
  mode = modes[nmode = (nmode+1)%4];
  len = Math.floor(windowWidth*windowHeight/mode);
  while (drops.length != len){
    if (drops.length < len) drops.push(new Drop());
    else drops.pop();
  }
}