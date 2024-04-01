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

// Função para verificar a visibilidade das seções e aplicar classe 'visible' se estiverem visíveis
function checkVisibility() {
  var sections = document.querySelectorAll(".section");
  sections.forEach(function (section) {
    var top = section.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;
    if (top < windowHeight) {
      section.classList.add("visible");
    }
  });
}

// Adiciona um ouvinte de evento de rolagem para verificar a visibilidade das seções
window.addEventListener("scroll", checkVisibility);

// Chama a função inicialmente para verificar a visibilidade das seções ao carregar a página
checkVisibility();
