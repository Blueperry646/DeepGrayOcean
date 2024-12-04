// BOTÃO PROJETOS

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

document.addEventListener("DOMContentLoaded", () => {
  console.log("Página carregada com sucesso!");

  const cards = document.querySelectorAll('.card');
  let activeCard = null;

  function activateCard(card) {
    if (activeCard) {
      activeCard.classList.remove('active');
    }
    card.classList.add('active');
    activeCard = card;
  }

  function resetCards() {
    if (activeCard) {
      activeCard.classList.remove('active');
      activeCard = null;
    }
  }

  function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const scrollTop = window.scrollY;

    reveals.forEach((reveal) => {
      const elementTop = reveal.getBoundingClientRect().top + scrollTop;
      if (elementTop < scrollTop + windowHeight - 100) {
        reveal.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();

  cards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Impede que o clique no card se propague para o document
      event.stopPropagation();
      activateCard(card);
    });
  });

  // Se clicar fora do card, desative o card ativo
  document.addEventListener('click', resetCards);
});

// DOAÇÕES

let totalDonations = 0; // Valor total de doações acumuladas
const totalGoal = 1000000; // Meta total da arrecadação

document.getElementById('donate-button').addEventListener('click', function() {
  const donationAmount = parseFloat(document.getElementById('donation-amount').value);
  if (donationAmount && !isNaN(donationAmount) && donationAmount > 0) {
    totalDonations += donationAmount;
    
    // Atualizando o valor exibido
    document.getElementById('current-amount').textContent = `R$ ${totalDonations.toFixed(2)}`;

    // Atualizando a barra de progresso
    const progressPercentage = Math.min((totalDonations / totalGoal) * 100, 100);
    document.querySelector('.progress').style.width = `${progressPercentage}%`;

    // Verifica se a meta foi atingida
    if (totalDonations >= totalGoal) {
      alert('Parabéns! A meta foi atingida!');
    }

    // Limpar o campo de input
    document.getElementById('donation-amount').value = '';
  } else {
    alert('Por favor, insira um valor válido para a doação.');
  }
});
