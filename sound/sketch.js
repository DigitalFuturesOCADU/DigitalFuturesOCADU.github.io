
var survive;


function preload() {
  
  survive = loadSound("survive.mp3");
}

function setup() {
  getAudioContext().resume();
  rooster.play();
  createCanvas(400, 400);
}

function draw() {
  
  if(mouseX < 200){
    if (!survive.isPlaying()) 
    {
    survive.play();
    }
  }else{
    survive.pause();
  }

}

function mousePressed() {
  if (survive.isPlaying()) { // .isPlaying() returns a boolean
    survive.pause();
    background(255);
  } else {
    survive.play();
    background('#FF00FF');
  }
}