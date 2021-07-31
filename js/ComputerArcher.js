class computerArcher {
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
      this.image = loadImage("./assets/computerArcher.png");
      World.add(world, this.body);
      Matter.Body.setAngle(this.body,this.angle)
    }
  
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;

  
    
      push();
      translate(pos.x, pos.y);
      rotate(this.angle);
      imageMode(CENTER); 
      image(this.image, 0, 0, this.width, this.height);
      pop();
    }
  }
  