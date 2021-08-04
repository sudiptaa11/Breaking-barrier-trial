class Sling{
    constructor(b1, p2){
        var options = {
            bodyA : b1,
            pointB : p2,
            stiffness : 0.05,
            length : 10
        }
        this.sling = Constraint.create(options);
        this.sling1 = loadImage("sling1.png");
        this.sling2 = loadImage("sling2.png");
        this.sling3 = loadImage("sling3.png");

        this.pointB = p2;

        World.add(myWorld, this.sling);
    }

    display(){
        var pos1 = this.sling.bodyA.position;
        var pos2 = this.pointB;

        push();
        line(pos1.x-5,pos1.y,pos2.x+5, pos2.y + 5);
        pop();

        image(this.sling1,stand.x+10,stand.y - 40,65,100);
        image(this.sling2,stand.x-20,stand.y - 60,50,70);
    }
}