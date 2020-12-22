class Bike{
    constructor(x, y) {
        var options = {
            restitution:0,
            friction:0,
            density:5,
            isStatic: false
        }
        this.body = Bodies.rectangle(x, y, 180, 80, options);
        this.image = loadImage("images/Bikes/Bike-Tron.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0,0,10,10)
        imageMode(CENTER);
        image(this.image, 0, 0, 200, 100);
        pop();
      }
}