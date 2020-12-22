class Pendulum{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularStiffness: 1,
            length: 200
        };
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.Pendulum = Constraint.create(options);
        World.add(world, this.Pendulum);
    }

    display(){
        if (this.Pendulum.bodyA) {
            var pointA = this.Pendulum.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#66340C");
            line(pointB.x, pointB.y, pointA.x, pointA.y);
            pop();
        }
    }
}