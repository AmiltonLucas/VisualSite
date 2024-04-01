const botaoAcessibilidade = document.getElementById("botao-acessibilidade");
const botaoParar = document.getElementById("botao-parar");
const textoDemarcado = document.getElementById("texto-demarcado");
let utterance = null;

botaoAcessibilidade.addEventListener("click", function () {
  const textoSelecionado = window.getSelection().toString().trim();
  if (textoSelecionado !== "") {
    utterance = new SpeechSynthesisUtterance(textoSelecionado);
    speechSynthesis.speak(utterance);
    botaoParar.classList.remove("visually-hidden");
  }
});

botaoParar.addEventListener("click", function () {
  if (utterance !== null) {
    speechSynthesis.cancel();
    botaoParar.classList.add("visually-hidden");
  }
});
