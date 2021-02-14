class Monster{
    constructor(x,y,r){
      var options = {
        density : 1, 
        frictionAir : 1
      }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,(this.r)/2, options);
        this.image = loadImage("images/Monster-01.png");
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, 250, 250);
        pop();
      }
    }
