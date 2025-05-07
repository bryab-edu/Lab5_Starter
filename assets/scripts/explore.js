// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  let voiceSel = document.getElementById("voice-select");
  
  if (typeof speechSynthesis === "undefined") {
    alert("your browser does not have built in voices!");
    return;
  }

  let speech = window.speechSynthesis;
  let voices = speech.getVoices();

  speech.addEventListener("voiceschanged", () => {
  voices = speech.getVoices();
  for (let i = 0; i < voices.length; i++) {
    const option = document.createElement("option");
    option.textContent = `${voices[i].name} (${voices[i].lang})`;
    option.setAttribute("data-lang", voices[i].lang);
    option.setAttribute("data-name", voices[i].name);
    voiceSel.appendChild(option);
    }
  });

  let textRead = document.querySelector("textarea");
  let button = document.querySelector("button");

  button.addEventListener("click", function(){
    let utter = new SpeechSynthesisUtterance(textRead.value);
    let selected = voiceSel.selectedOptions[0].getAttribute("data-name");
    console.log(selected);
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selected) {
        utter.voice = voices[i];
      }
    }

    let face = document.querySelector("img")
    utter.onstart = function () {
      face.src = "assets/images/smiling-open.png";
    };
    utter.onend = function () {
      face.src = "assets/images/smiling.png";
    };


    speech.speak(utter);
    textRead.blur();
  })

  // speech.speaking.addEventListener("change", function(){
  //   let face = document.querySelector("img")
  //   if(speech.speaking){
  //     face.src = "assets/images/smiling-open.svg";
  //   }
  //   else{
  //     face.src = "assets/images/smiling.svg";
  //   }
  // })

}
