// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let jsConfetti = new JSConfetti(); //confetti obj
  let button = document.querySelector("button"); //button for playing te sound
  let horn = document.getElementById("horn-select"); //value for which horn is selected
  let img = document.querySelector("img"); //horn image
  let auti = document.getElementsByClassName("hidden")[0]; //obj for which horn audio is payed
  let volA = document.getElementById("volume-controls").children[0];
  let volI = document.getElementById("volume-controls").children[1];

  
  horn.addEventListener("change", function() { //Changes the properties of the image and audio to be played
    let newHorn = horn.value;
    if(newHorn == "air-horn"){
      img.src = "assets/images/air-horn.svg";
      img.alt = "air horn selected";
      auti.src = "assets/audio/air-horn.mp3";
    }
    if(newHorn == "car-horn"){
      img.src = "assets/images/car-horn.svg";
      img.alt = "car horn selected";
      auti.src = "assets/audio/car-horn.mp3";
    }
    if(newHorn == "party-horn"){
      img.src = "assets/images/party-horn.svg";
      img.alt = "party horn selected";
      auti.src = "assets/audio/party-horn.mp3";
    }
  })

  button.addEventListener('click', function() { //Plays corresponding horn when button is clicked
    if(img.alt == "No image selected"){ //no horn selected alerts instead of trying to play a sound
      alert("Select a horn!");
    }
    else{
      auti.play();
      if(img.alt == "party horn selected"){
        jsConfetti.addConfetti(); //does confetti effect in addition to audio
      }
    }
  })

  volA.addEventListener("input", function(){
    auti.volume = volA.value / 100;
    if(volA.value >= 67){
      volI.src = "assets/icons/volume-level-3.svg";
      volI.alt = "Volume level 3";
    }
    if(volA.value >= 33 && volA.value < 67){
      volI.src = "assets/icons/volume-level-2.svg";
      volI.alt = "Volume level 2";
    }
    if(volA.value < 33) {
      volI.src = "assets/icons/volume-level-1.svg";
      volI.alt = "Volume level 1";
    }
    if(volA.value == 0){ // volume icon is off when slider is at 0
      volI.src = "assets/icons/volume-level-0.svg";
      volI.alt = "Volume level off";
    }
  })
  // TODO
}
