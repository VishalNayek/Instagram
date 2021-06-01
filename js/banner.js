let img = ["goodyear.png","wrangler_fortitude.png","amortecedor.png","assurance.png","pitStop.png","goodyear_logo.png"];
//let inf = ["img1", "img2", "img3"];

function mudar(imgs) {
  document.querySelector(".imagem-banner").src = "img/" + img[imgs];
}

let atual = 0;

mudar(atual);

setInterval(function () {
  atual++;
  if (atual == img.length) {
    atual = 0;
  }
  mudar(atual)
}, 5000);
