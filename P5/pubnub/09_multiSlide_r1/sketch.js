/*
 * Creation & Computation - Digital Futures, OCAD University
 * Kate Hartman / Nick Puckett
 * 
 * Receiver file that cycles through images based on the input from the controller 
 */

// server variables

var dataServer;
var subKey = 'sub-c-64587bc8-b0cf-11e6-a7bb-0619f8945a4f';

//name used to sort your messages. used like a radio station. can be called anything
var channelName = "powerpoint";


//image variables
var img = [];
var totalImages = 4;

function preload() 
{
  for (var i = 1; i<=totalImages; i++) 
  {
    img[i] = loadImage("load/img" + i + ".jpg");
  }
}


function setup() 
{
  getAudioContext().resume();
  createCanvas(windowWidth, windowHeight);
  background(255);
  
  

   // initialize pubnub
  dataServer = new PubNub(
  {
    subscribe_key : subKey,  
    ssl: true  //enables a secure connection. This option has to be used if using the OCAD webspace
  });
  
  //attach callbacks to the pubnub object to handle messages and connections
  dataServer.addListener({ message: readIncoming });
  dataServer.subscribe({channels: [channelName]});

}

function draw() 
{


}

function readIncoming(inMessage) //when new data comes in it triggers this function, 
{                               // this works becsuse we subscribed to the channel in setup()

    background(255);
    image(img[inMessage.message.slideNumber], 0,0);

}

