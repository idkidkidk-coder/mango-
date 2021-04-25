class Mango {
    constructor(x, y, r) {
        var MangoOptions = {
            isStatic : true,
            restitution : 0.3,
            friction : 3.0
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Matter.Bodies.circle(this.x, this.y, (this.r-20)/2, MangoOptions);
        
        this.image = loadImage("kingoffruits.png")

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        fill(color(255, 255, 0));
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}