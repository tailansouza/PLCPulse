//menu haburguer
const bug = document.querySelector(".bug");
const nav = document.querySelector(".nav");
bug.addEventListener("click",()=>
nav.classList.toggle("active"));
//carossel
const carrossel = document.querySelector('.carossel');
const imagens = document.querySelectorAll('.conteiner img');

let contador = 0;
const totalImagens = imagens.length;

function slider() {
  imagens.forEach((img, index) => {
    if (index === contador) {
      img.style.display = 'block';
      
    } else {
      img.style.display = 'none';
     
    }
  });

  contador++;

  if (contador === totalImagens) {
    contador = 0;
  }
}

setInterval(slider, 2000);



