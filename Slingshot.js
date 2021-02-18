class Slingshot {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 25,
      };
  
      this.pointB = pointB;
      this.slingshot = Constraint.create(options);
      World.add(world, this.slingshot);
    }
    attach(body) {
      this.slingshot.bodyA = body;
    }
  
    fly() {
      this.slingshot.bodyA = null;
    }
  
    display() {
      if (this.slingshot.bodyA) {
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.pointB;
        push();
  
        stroke(48, 22, 8);
        strokeWeight(3);
  
        line(pointB.x, pointB.y, pointA.x, pointA.y);
  
        pop();
      }
    }
  }
  