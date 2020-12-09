class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
  }

  score(){
    if(this.visibility < 0 && this.visibility >= -105){
      score ++;
  }
  }

  display(){
    if(this.body.speed < 5){
      super.display();
    }
    else{
      push();
      World.remove(world, this.body);
      this.visibility = this.visibility - 5;
      //tint(255,this.visibility);
      pop();
    }
}
}