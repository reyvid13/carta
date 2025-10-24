// Texto que será digitado
const text = 
"Oi, meu amor ❤️\n\nHoje é um dia especial, e eu quis fazer algo diferente...\n\n" +
"Então fiz essa pequena carta pra te lembrar o quanto você é incrível.\n\n" +
"Cada momento com você é único, e eu sou grato por ter você na minha vida.";

// Velocidade da digitação (quanto menor, mais rápido)
const speed = 50;
let i = 0;

// Função que simula a digitação
function typeWriter() {
  if (i < text.length) {
    document.getElementById("typed-text").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

// Quando a página carregar
window.onload = () => {
  typeWriter();

  // Botão e mensagem oculta
  const btn = document.getElementById("reveal-btn");
  const hidden = document.getElementById("hidden-message");

  btn.addEventListener("click", () => {
    hidden.classList.toggle("hidden");
  });
};
