/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */
const clueHoldTime = 700;
const cluePauseTime = 333;
const nextClueWaitTime = 500; 
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume= 0.5;
var mistake=0; 
var music;
var interval;
var mis = document.getElementById('mis'); 
var t = 10; 
var time = document.getElementById('time');
var guessCounter = 0;
var pattern;
var timeout;


function getRandomInt(max) {
  return Math.floor(Math.random() * max)+1;
}

function startGame(){
    //initialize game variables
    progress = 0;
    mistake = 0 ;
    gamePlaying = true;

    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    pattern = [getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6), getRandomInt(6)];

    playClueSequence();


}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
  timeout = setTimeout(resetClock,delay);
}
function stopGame(){
    //initialize game variables
    gamePlaying = false;
    resetClock();
    clearInterval(interval); 
    mistake =0;
    mis.innerHTML = mistake;
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}



function lightButton(btn){
    document.getElementById("button"+btn).classList.add("lit")
}
function changeImage(btn){
    document.getElementById("i"+btn+"a").classList.remove("appear")
    document.getElementById("i"+btn+"b").classList.add("appear")

}
function backImage()
{

    document.getElementById("i1b").classList.remove("appear")
    document.getElementById("i1a").classList.add("appear")
    document.getElementById("i2b").classList.remove("appear")
    document.getElementById("i2a").classList.add("appear")
    document.getElementById("i3b").classList.remove("appear")
    document.getElementById("i3a").classList.add("appear")
    document.getElementById("i4b").classList.remove("appear")
    document.getElementById("i4a").classList.add("appear")
    document.getElementById("i5b").classList.remove("appear")
    document.getElementById("i5a").classList.add("appear")
    document.getElementById("i6b").classList.remove("appear")
    document.getElementById("i6a").classList.add("appear")

}
function clearButton(btn){
    document.getElementById("button"+btn).classList.remove("lit")
    
}

function playSingleClue(btn){

  if(gamePlaying){
    changeImage(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
    
  }
}


function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}

function winGame(){
  stopGame();
  alert("Congrets. You win the game!");
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  
  if(pattern[guessCounter] == btn){
    if(guessCounter == progress){
      if(progress == pattern.length-1){
        winGame();
      }
      else{
        progress++;
        clearInterval(interval);
        playClueSequence();
        
      }
    }
    else
    {
        guessCounter++;
    }
  }
  else
  {
      mistake++;
      mis.innerHTML=mistake;
      clearInterval(interval);
      if(mistake == 4)
      loseGame();
      else
      {
        if(mistake !=3)
        alert("You just make "+ mistake+" mistake, try one more time!")
        else
        alert("You just make "+ mistake+" mistake, this is your last chance!")
        playClueSequence();

      }
  }
 
}

// const freqMap = {
//   1: 261.6,
//   2: 329.6,
//   3: 392,
//   4: 466.2,
//   5: 500.2,
//   6: 666.2,
// }
function playTone(btn,len){ 

  o.value = document.getElementById("i" + btn+"ba").play();
  //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  //context.resume()
  tonePlaying = true;
  setTimeout(function(){
    stopTone()
  },len)

}
function startTone(btn){
  if(!tonePlaying){
    //context.resume()
    o.currentTime = 0;
    o.value = document.getElementById("i" + btn+"ba").play();
    //g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    //o.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    //context.resume()
    tonePlaying = true;
    changeImage(btn)
  }
}

function stopTone(){
 // g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  for(var i = 1; i < 7; i++)
  {
      o.currentTime = 0;
      o.value = document.getElementById("i" + i+"ba").pause();
      
  }
  
  tonePlaying = false
  backImage() 
}

   

// Page Initialization
// Init Sound Synthesizer
//var AudioContext = window.AudioContext || window.webkitAudioContext 
//var context = new AudioContext()
var o = document.getElementById("i1ba");
//var g = context.createGain()
// g.connect(context.destination)
// g.gain.setValueAtTime(0,context.currentTime)
//o.connect(g)

function count(){
  t = t - 1; 
  time.innerHTML = t;
  if(t <= 0)
  {
    alert("You just out of time, you lost the game!");
    stopGame();
  }
}
function timeGo(){
  interval = setInterval(count,1000);
  
}

function resetClock(){
  clearInterval(interval);
  clearTimeout(timeout);
  t = 10; 
  timeGo();
  time.innerHTML = t;
}
