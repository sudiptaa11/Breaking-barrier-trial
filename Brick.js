class Brick{
    constructor(x,y){
        var options={
            'isStatic' : true
        }
        this.brick = Bodies.rectangle(x,y,50,50, options);
        this.image = loadImage("brick.png");
        World.add(myWorld, this.brick);
    }
    display(){
        var pos = this.brick.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y,100,75);
        pop();
    }
}