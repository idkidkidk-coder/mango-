class ChainConstraint {
    constructor(body1, point2){
        var Constraintoptions = {
            bodyA: body1,
            pointB: point2,
            stiffness: 0.09,
            length: 5
        }
        this.chain = Constraint.create(Constraintoptions);
        World.add(world, this.chain);
    }

    fly() {
        this.chain.bodyA = null; 
    }
 
    comeBack(body1) {
        this.chain.bodyA = body1;
    }

    display(){
              
        push();
        if (this.chain.bodyA) {

        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();

        }
    }
        
}

