// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // Defines all the voices (taken from the documentation site)
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }

    const voices = speechSynthesis.getVoices();

    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;

      if (voice.default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      document.getElementById("voice-select").appendChild(option);
    }
  }

  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.addEventListener("voiceschanged", populateVoiceList);
  }

  // Make the text to be spoken
  let speakText = document.getElementById("text-to-speak");

  let utterance = new SpeechSynthesisUtterance("");

  speakText.addEventListener('input', function() {
    utterance = new SpeechSynthesisUtterance(event.target.value);
  });

  // Pick the voice
  let voiceSelect = document.getElementById("voice-select");
  let selectedVoice = null;

  voiceSelect.addEventListener("change", function() {
    let selectedName = voiceSelect.selectedOptions[0].getAttribute("data-name");
    selectedVoice = speechSynthesis.getVoices().find(v => v.name === selectedName);
  });

  // Make the play button make audio and image change
  let talkButton = document.querySelector("button");
  let mouthImg = document.querySelector("img");

  talkButton.addEventListener("click", function() {
    mouthImg.src = "assets/images/smiling-open.png";

    utterance.onend = function() {
      mouthImg.src = "assets/images/smiling.png";
    };

    utterance.voice = selectedVoice;
    speechSynthesis.speak(utterance);
  });
}