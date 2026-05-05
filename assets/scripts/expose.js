// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  let selectHorn = document.getElementById('horn-select');

  // Image + Audio Selection
  let currHornImg = document.querySelector("img");
  let currHornAud = document.querySelector("audio");
  let confetti = false;

  selectHorn.addEventListener("change", function() {
    currHornImg.src = "assets/images/" + event.target.value + ".svg";
    currHornAud.src = "assets/audio/" + event.target.value + ".mp3";

    // Appropiately sets confetti value
    if (event.target.value == "party-horn") {
      confetti = true;
    } else {
      confetti = false;
    }
  });

  // Audio controls
  let audioSlider = document.getElementById("volume");
  let audioImage = document.querySelector("#volume-controls img");

  audioSlider.addEventListener('input', function() {
    currHornAud.volume = audioSlider.value * 0.01;

    // Changes volume icon
    if (audioSlider.value == 0) {
      audioImage.src = "assets/icons/volume-level-0.svg";
    } else if (audioSlider.value < 34) {
      audioImage.src = "assets/icons/volume-level-1.svg";
    } else if (audioSlider.value < 68) {
      audioImage.src = "assets/icons/volume-level-2.svg";
    } else {
      audioImage.src = "assets/icons/volume-level-3.svg";
    }
  });

  // Play audio
  let playButton = document.querySelector("button");

  const jsConfetti = new JSConfetti();

  playButton.addEventListener("click", function() {
    currHornAud.play();

    // Plays confetti for party horn
    if (confetti) {
      jsConfetti.addConfetti();
    }
  });
}