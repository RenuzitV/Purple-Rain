function Drop() {
  this.reYSpeed = function(){
    return map(this.z, 0, 20, 10, 15);
  }
  this.reXSpeed = function(){
    return random(-0.03, 0.03);
  }

  this.x = random(width);
  this.y = random(-width, 0);
  this.z = random(0, 20);
  this.len = map(this.z, 0, 20, 8, 20);
  this.yspeed = this.reYSpeed();
  this.xspeed = this.reXSpeed();
  this.maxX = 3;
  this.thick = map(this.z, 0, 20, 1, 2.5);


  this.fall = function() {
    this.y = this.y + this.yspeed;
    this.x = this.x + this.xspeed;
//     var grav = map(this.z, 0, 20, 0, 0.01);
    this.yspeed = max(min(this.yspeed + grav, 10), -10);
    // this.xspeed = max(min(this.xspeed + windspeed, this.maxX), -this.maxX);
    this.xspeed = map(mouseX, 0, width, -1, 1);

    if (this.y > height + 50) {
      this.y = random(-200, -50);
      this.yspeed = this.reYSpeed();
      this.xspeed = this.reXSpeed();
      this.x = random(width);
    }

    if (this.x > width+10) this.x = random(-5, 0);
    else if (this.x < 0) this.x = random(width, width+5);
  }

  this.show = function() {
    strokeWeight(this.thick);
    stroke(138, 43, 226);
    mx = map(this.xspeed, -this.maxX, this.maxX, -2, 2);
    my = map(this.yspeed, -10, 10, -2, 2);
    // shift = map(mx*my, -4, 4, -1, 1);
    x1 = this.x-this.xspeed;
    x2 = this.x+this.xspeed;
//     if (mouseY < height/2) [x1, x2] = [x2, x1];
    line(x1, this.y, x2, this.y+this.len);
    fill(138, 43, 226);
    //text("❤", this.x, this.y);
  }
}