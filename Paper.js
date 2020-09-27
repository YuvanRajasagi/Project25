class Paper {
    constructor() {
      var options = {
        isStatic: false,
        'restitution':0,
        'friction':0,
        'density':1.2
      }
      this.body = Bodies.circle(100, 520, 20, options);
      this.image = loadImage("images/paper.png");
      World.add(world, this.body);
  }
  display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      fill("white");
      rotate(angle);
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,60,60);
      pop();
  }
}