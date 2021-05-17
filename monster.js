class monster {
    constructor(x, y, width, height) {
        var options = {

            isStatic:false,
            density: 1,
            friction: 1,
            restitution: 1
        }
        this.body = Bodies.rectangle(x, y, width*4, height*3, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("template (2).png")
       
        World.add(world, this.body);
    }
    display() {
            var pos = this.body.position;
        imageMode(CENTER);
        fill("white");
        image(this.image,pos.x, pos.y, this.width*5, this.height*4);
        
    }

};