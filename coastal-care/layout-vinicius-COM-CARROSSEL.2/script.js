document.getElementById('projects-button').addEventListener('click', function () {
    var card = document.getElementById('projects-card');

    if (card.classList.contains('show')) {
        card.classList.remove('show');
    } else {
        card.classList.add('show');
    }
    e.stopPropagation();
});

document.addEventListener('click', function (e) {
    var card = document.getElementById('projects-card');
    var button = document.getElementById('projects-button');

    if (!card.contains(e.target) && !button.contains(e.target)) {
        card.classList.remove('show');
    }
});

// Carrossel

const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');  // Mudança aqui: usar querySelectorAll para pegar todos os itens da galeria

const information = document.querySelector(".caption");  // Corrigi o nome do elemento para '.caption'

const texts = ["A explosão da deepwater horizon resultou em um dos maiores derramamentos de petróleo da história, com um vazamento que durou 87 dias (780 milhões de litros) e cobriu a costa do golfo do méxico que incluem texas, louisiana, mississippi, alabama e flórida.",

 "A Grande Mancha de Lixo do Pacífico se encontra entre a Califórnia e o Havaí, ela foi formada em um giro oceanico que são correntes circulares de água formadas por vento. E o seu tamanho representa cerca de três vezes o território francês.O que é muito preocupante.", 

 "O despejo inadequado de esgoto em Mumbai contamina praias e áreas recreativas, causando riscos à saúde pública, incluindo doenças infecciosas como cólera e hepatite A. A qualidade do ar também é afetada, agravando problemas respiratórios.", 

 "O desastre do Exxon Valdez ocorreu em 24 de março de 1989, no estreito de Prince William, no sul do Alasca, quando colidiu com um recife e derramou cerca de 11 milhões de galões (42 milhões de litros) de petróleo cru no mar.",

 "Na cidade de Minamata, uma fábrica despejou resíduos contendo mercúrio no mar, a população local que tirava alimento desse mar, começou a apresentar sérios problemas de saúde, incluindo envenenamento por mercúrio, que resultou em danos neurológicos e morte."];  // Vetor de textos
let c = 0;  // Índice inicial para o vetor de textos

class Carousel {

    constructor(container, items, controls) {
        this.carouselContainer = container;
        this.carouselControls = controls;
        this.carouselArray = [...items];  // Usar o spread operator para garantir que a lista seja mutável
    }

    updateGallery() {
        // Remover todas as classes de galeria
        this.carouselArray.forEach(el => {
            el.classList.remove('gallery-item1', 'gallery-item2', 'gallery-item3', 'gallery-item4', 'gallery-item5');
        });

        // Adicionar classes de galeria atualizada
        this.carouselArray.forEach((el, i) => {
            el.classList.add(`gallery-item${i + 1}`);
        });
    }

    setCurrentState(direction) {
        // Mover a array de items para esquerda ou direita com base no controle pressionado
        if (direction.className.includes('previous')) {
            this.carouselArray.unshift(this.carouselArray.pop());  // Move o último item para o início
            c = (c - 1 + texts.length) % texts.length;  // Atualiza o índice para o texto anterior
        } else if (direction.className.includes('next')) {
            this.carouselArray.push(this.carouselArray.shift());  // Move o primeiro item para o fim
            c = (c + 1) % texts.length;  // Atualiza o índice para o próximo texto
        }

        // Atualizar o texto com base no índice atual
        information.textContent = texts[c];

        this.updateGallery();
    }

    setControls() {
        // Criar os botões de navegação
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;

            // Adicionar o botão de navegação à galeria
            galleryControlsContainer.appendChild(button);
        });
    }

    useControls() {
        // Adicionar os eventos de clique para cada controle
        const triggers = galleryControlsContainer.querySelectorAll('button');
        triggers.forEach(control => {
            control.addEventListener('click', (e) => {
                e.preventDefault();
                this.setCurrentState(control);
            });
        });
    }

}


const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls);

exampleCarousel.setControls();
exampleCarousel.useControls();


information.textContent = texts[c];  



// Política de Privacidade

document.getElementById("privacy-policy-link").addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("privacy-policy").style.display = "flex"; 
});


function closePrivacyPolicy() {
    document.getElementById("privacy-policy").style.display = "none"; 
}

window.addEventListener("click", function(event) {
    var privacyPolicy = document.getElementById("privacy-policy");
    var content = document.querySelector(".privacy-policy-content");

    if (privacyPolicy.style.display === "flex" && !content.contains(event.target) && !event.target.matches("#privacy-policy-link")) {
        privacyPolicy.style.display = "none";
    }
});


window.addEventListener('load', () => {
    const privacyCard = document.getElementById('privacy-card');
    const acceptButton = document.getElementById('accept-privacy');
    const privacyLink = document.getElementById('privacy-policy-link');


    acceptButton.addEventListener('click', () => {
        privacyCard.style.display = 'none';
    });

  
    privacyLink.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('privacy-policy').style.display = 'block';
    });


    const isAccepted = localStorage.getItem('privacyAccepted');
    if (!isAccepted) {
        privacyCard.style.display = 'block';
    } else {
        privacyCard.style.display = 'none';
    }
});

function closePrivacyPolicy() {
    document.getElementById('privacy-policy').style.display = 'none';
}