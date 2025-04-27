/* This function "renders" some bit of text as audio to the user. */
function encourage() {
  let message = document.getElementById("message").value;
  let postScript = document.getElementById("post-script").value;
  let finalMessage = `${message} P.S. ${postScript}`;

  document.getElementById("output").textContent = finalMessage;

  renderTTS(finalMessage);
  spawnFloatingHeart(); 
}

function renderTTS(text) {
  var synthesis = window.speechSynthesis;
  var utterance = new SpeechSynthesisUtterance(text);

  var voice = synthesis
    .getVoices()
    .find((voice) => voice.name === "Google UK English Female");
  if (voice) utterance.voice = voice;

  utterance.pitch = 1;
  utterance.rate = 1;

  // Get volume from slider
  let volumeSlider = document.getElementById("volume");
  utterance.volume = parseFloat(volumeSlider.value);

  synthesis.speak(utterance);
}

// Ensure voices load properly
window.speechSynthesis.onvoiceschanged = function () {
  renderTTS(""); // Pre-load voices
};


function spawnFloatingHeart() {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = '💖';
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 2000); // Remove after animation ends
}


