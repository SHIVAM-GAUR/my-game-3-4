class monsterBase{
         constructor(x,y){
         this.body = createSprite(x,y,10,10);
         var x = Math.round(random(1,3));
         if(x === 1 ){
           this.image = loadImage("images/monster.png");
         }
         else if(x === 2 ){
           this.image = loadImage("images/monster2.png");
           console.log(this.image);
         }
         else{
           this.image = loadImage("images/monster3.png");
         }
         this.body.addImage(this.image);
         this.body.scale = 0.2;
         this.X = this.body.x + 150;
         }
         display(){
        if(this.body.x<this.X){
        this.body.x = this.body.x+1;
        
        }
       if(this.body.x===this.X){
        this.body.x = this.body.x-150;
        }
          
         }
         
        }
