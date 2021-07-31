class playerArcher {
    constructor(x, y, width, height, archerAngle) {
      var options = {
        restitution: 0.8,
        friction: 1.0,
        density: 1.0,
        isStatic: true
      };
      this.width = width;
      this.height = height;
      this.angle=archerAngle
      this.body = Bodies.rectangle(x, y, this.width, this.height, options);
      Matter.Body.setAngle(this.body,this.angle);
      this.image = loadImage("./assets/playerArcher.png");
      World.add(world, this.body);
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
  
      if (keyIsDown(RIGHT_ARROW) && this.angle <-0.8) {
        this.angle += 0.02;
        Matter.Body.setAngle(this.body,this.angle)
      }
  
      if (keyIsDown(LEFT_ARROW) && this.angle > -1.9) {
        this.angle -= 0.02;
        Matter.Body.setAngle(this.body,this.angle)
      }
  
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
     
  }
  