class Block{
    constructor(x, y) {
        var options = {
            restitution :0.4,
            friction :0.0,
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke(0);
        strokeWeight(3);
        fill("red");
        rect(0, 0, 50, 50);
        pop();
      }
}