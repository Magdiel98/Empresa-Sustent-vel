const imagens = [
  "img/equipe1.jpg",
  "img/equipe2.jpg",
  "img/equipe3.jpg",
  "img/equipe4.jpg",
  "img/equipe5.jpg"
];

let indice = 0;
const img = document.getElementById("foto");

// garante que o DOM esteja pronto (caso o script seja movido para <head>)
document.addEventListener("DOMContentLoaded", () => {
  // garante opacidade inicial
  img.style.opacity = 1;

  function trocarImagem() {
    // anima para desaparecer
    img.style.opacity = 0;

    // depois de 500ms troca o src e faz fade-in
    setTimeout(() => {
      indice = (indice + 1) % imagens.length;
      img.src = imagens[indice];

      // força reflow (opcional) para garantir transição
      void img.offsetWidth;

      img.style.opacity = 1;
    }, 500);
  }

  // chama a função a cada 5 segundos
  setInterval(trocarImagem, 5000);
});