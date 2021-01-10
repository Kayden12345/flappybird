var bird;
var pipes = [];
 function preload(){

 }

 function setup(){
    canvas = createCanvas(displayWidth/2, displayHeight-30);
    bird = new Bird;
    pipes.push(new Pipe())
    
 }

 function draw(){
   background(random(0,255),random(0,255),random(0,255))  
  

   for (var i= pipes.length-1; i >= 0; i-- ){
    pipes[i].show();
    pipes [i].update();

    if(pipes[i].hits(bird)){
      console.log("hit!")
    }

    if(pipes[i].offscreen()){
      pipes.splice(i,1);
    }
  }

  bird.show();
  bird.update();

  if(frameCount % 30 == 0){
    pipes.push(new Pipe())
   }

   translate(0,0,mouseX);

}

 function keyPressed() {
   if(keyCode === 32){
     bird.up();
    //console.log(32)
   }
 }

 