class Ground{
    constructor(x,y,width,height,angle){
        var options = {
            friction : 0,
            restitution: 0,
            density: 5,
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        Body.setAngle(this.body, angle);
        angleMode(RADIANS);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(ang);
        fill("black");
        rectMode(CENTER);
        fill("#66340C");
        rect(0, 0, this.width, this.height);
        pop();
    }
}