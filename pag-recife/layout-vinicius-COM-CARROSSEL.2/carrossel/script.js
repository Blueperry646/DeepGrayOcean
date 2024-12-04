const galleryContainer = document.querySelector('.gallery-container');
const galleryControlsContainer = document.querySelector('.gallery-controls');
const galleryControls = ['previous', 'next'];
const galleryItems = document.querySelectorAll('.gallery-item');  // Mudança aqui: usar querySelectorAll para pegar todos os itens da galeria

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
        } else if (direction.className.includes('next')) {
            this.carouselArray.push(this.carouselArray.shift());  // Move o primeiro item para o fim
        }

        this.updateGallery();
    }

    setControls() {
        // Criar os botões de navegação
        this.carouselControls.forEach(control => {
            const button = document.createElement('button');
            button.className = `gallery-controls-${control}`;
            
            // Remover o texto e adicionar apenas as setas como conteúdo (usaremos pseudo-elementos no CSS)
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
