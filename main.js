// constructor function for bird
function Bird() {
    this.canvas = document.getElementById("canvas");
    this.canvas.width = 300;
    this.canvas.height = 560;
    this.win = canvas.getContext('2d');
    this.birdX = 60;
    this.birdY = 200;
    this.birdW = 38;
    this.birdH = 30;
    this.gravity = 0.6;
    this.velocity = 0;
    this.lift = -16;
    this.bg = new Image();
    this.birdImg = new Image();
    this.bg.src = "images/bg.png"
    this.birdImg.src = "images/bird.png"
    

    this.show = function() {
        this.win.drawImage(bird.bg,0,0,300,560);
        this.win.drawImage(this.birdImg,this.birdX,this.birdY,this.birdW,this.birdH);
       
    }

    this.update = function() {
        this.velocity += this.gravity;
        this.velocity *= 0.9;
        this.birdY += this.velocity;

        if(this.birdY > 550) {
            this.velocity = 0;
            this.birdY = 550;
        }
        if(this.birdY < 0) {
            this.velocity = 0;
            this.birdY = 0;
        }
    }

    
}







// constructor function for pipe
function Pipe() {
    this.pipeX = 560;
    this.pipeY = 0
    this.xSpeed = -5;
    this.top = Math.floor(Math.random()*280);
    this.bottom = Math.floor(Math.random()*280);
    this.w = 50;
    this.topPipe = new Image();
    this.bottomPipe = new Image();
    this.topPipe.src = "images/topPipe.png";
    this.bottomPipe.src = "images/botomPipe.png";
    this.canvas = document.getElementById("canvas");
    this.win = canvas.getContext('2d');


    this.show = function() {
        this.win.drawImage(this.topPipe,this.pipeX,this.pipeY,this.w,this.top);
        this.win.drawImage(this.bottomPipe,this.pipeX,560-this.bottom,this.w,this.bottom)
    }

    this.update = function() {
        this.pipeX += this.xSpeed;

  
    }

}










// main part to call my functions
let fames = window.frames;
let count = 0;
let bird = new Bird();
let pipes = [];
pipes.push(new Pipe());


function KeyPressedFunction() {
    document.addEventListener("keydown",this.moveUp);

}

function moveUp() {
    bird.velocity += bird.lift;
}

function check() {

}

function draw() {
    requestAnimationFrame(draw);    
    bird.show();    
    bird.update();   
    for(var i=0; i<pipes.length; i++) {
        pipes[i].show();
        pipes[i].update();
        count += 1;
    }

    KeyPressedFunction();
    if(count % 1 ==0 ) {
        pipes.push(new Pipe());
    }
    
}



draw();





