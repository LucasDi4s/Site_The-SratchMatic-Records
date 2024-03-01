// Define a variável currentSlide e a inicializa com o valor 0
let currentSlide = 0;

// Função para iniciar o slider
function startSlider() {
  // Obtém todas as imagens dentro do documento
  let imageCount = document.querySelectorAll("img");

  // Verifica se não há imagens
  if (imageCount.length === 0) {
    // Se não houver imagens, define imageCount novamente
    imageCount = document.querySelectorAll("img");
    // Define a transformação CSS para a posição inicial (0px)
    images.style.transform = `translateX(0px)`;
    // Retorna para interromper a execução da função
    return;
  }

  // Obtém o elemento <ul> que contém as imagens
  let images = document.querySelector("ul");
  // Define a transformação CSS para mover o slider para a próxima imagem
  images.style.transform = `translateX(-${currentSlide * 450}px)`;

  // Verifica se chegou ao final das imagens
  if (currentSlide === imageCount.length - 5) {
    // Se estiver no final, reinicia o slider definindo currentSlide como 0
    currentSlide = 0;
  } else {
    // Se não estiver no final, avança para a próxima imagem incrementando currentSlide
    currentSlide++;
  }
}

// Define um intervalo para chamar a função startSlider a cada 3000 milissegundos (3 segundos)
setInterval(() => {
  startSlider();
}, 3000);
