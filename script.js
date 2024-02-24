var synth = window.speechSynthesis;
var utterance = new SpeechSynthesisUtterance();
var isSpeaking = false;

document.getElementById('font-size-increase').addEventListener('click', function() {
  changeFontSize(2);
});

document.getElementById('font-size-decrease').addEventListener('click', function() {
  changeFontSize(-2);
});

document.getElementById('toggle-reading').addEventListener('click', function() {
  if (!isSpeaking) {
    var content = document.getElementById('content').textContent;
    speak(content);
  } else {
    stopSpeaking();
  }
});

function changeFontSize(value) {
  var currentSize = parseFloat(window.getComputedStyle(document.body, null).fontSize);
  var newSize = currentSize + value + 'px';
  document.body.style.fontSize = newSize;
}

function speak(text) {
  utterance.text = text;
  synth.speak(utterance);
  isSpeaking = true;
}

function stopSpeaking() {
  synth.cancel();
  isSpeaking = false;
}
