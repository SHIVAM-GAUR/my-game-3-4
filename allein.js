class allein {
    constructor(x, y){
      this.body = createSprite(x,y,10,10);
     
      var x = Math.round(random(1,3));
      if(x === 1 ){
        this.image = loadImage("images/allein.png");
      }
      else if(x === 2 ){
        this.image = loadImage("images/allein2.png");
        console.log(this.image);
      }
      else{
        this.image = loadImage("images/allein3.png");
      }
      this.body.addImage(this.image);
      this.body.scale = 0.2;
      this.Y = this.body.y + 125;
    
    }
    display(){
      if(this.body.y<this.Y){
      this.body.y = this.body.y+1;
      
      }
     if(this.body.y===this.Y){
      this.body.y = this.body.y-125;
      }
        
       }
  
  };