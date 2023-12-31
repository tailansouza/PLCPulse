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

//porque escolher

const toggleButtons = document.querySelectorAll('.toggle-porque');
const allSpans = document.querySelectorAll('.toggle-porque span');

toggleButtons.forEach(button => {
    button.addEventListener('click', function() {
        const targetId = this.getAttribute('data-target');
        const targetElement = document.querySelector(`[data-target="${targetId}"] span`);

        if (targetElement) {
            allSpans.forEach(span => {
                if (span !== targetElement) {
                    span.classList.add('hidden');
                }
            });

            // Alternando a exibição do elemento alvo (o span)
            targetElement.classList.toggle('hidden');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const spansToHide = document.querySelectorAll('.toggle-porque span');
  spansToHide.forEach(span => {
      span.classList.add('hidden');
  });
});
/*scroll revel*/

window.sr = ScrollReveal({reset: true});
sr.reveal('.vantagens,.quem-somos,.porque-escolher,.conteiner-ico,.logo-pe,.pe',{
  rotate :{x:0,y:25,z:0},
  duration: 800});
