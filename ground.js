class Ground{
    constructor(positionX, positionY, width, height){
        var options={
          isStatic:true
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(positionX, positionY, width, height, options);
        World.add(world, this.body);
    }
    display(){
        var pos  = this.body.position
        rectMode(CENTER);
        fill(225);
        rect(pos.x, pos.y,this.width, this.height);
        
    }      
}