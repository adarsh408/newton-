class SlingShot{
constructor(bodyA,pointB){
        var options={
        'bodyA':bodyA,
        'pointB': pointB,
        'stiffness':0.05,
        'length': 10,
        }
        this.chain=Constraint.create(options);
        World.add(world,this.chain);
        this.sling1=loadImage("sprites/sling1.png");
        this.sling2=loadImage("sprites/sling2.png");
        this.sling3=loadImage("sprites/sling3.png");
    }
    fly()
    {
        this.chain.bodyA=null;
    }
    reattach(birdBody){
        this.chain.bodyA=birdBody;
    }
    display()
    {
        image(this.sling1,220,334);
        image(this.sling2,190,334);
        
        if(this.chain.bodyA)
        {
        var posA=this.chain.bodyA.position;
        var posB=this.chain.pointB;
        push();
        stroke("#332108")
        strokeWeight(10);
        if(posA.x<230){
            line(posA.x-20,posA.y,posB.x-25,posB.y);
            line(posA.x+25,posA.y,posB.x+25,posB.y);
            image(this.sling3,posA.x-33,posA.y-15,15,30);
        }
        else{
            line(posA.x+20,posA.y,posB.x-25,posB.y);
            line(posA.x+25,posA.y,posB.x+25,posB.y);
            image(this.sling3,posA.x+23,posA.y-15,10,30);
        }
       
        pop();
        }
    }
}



