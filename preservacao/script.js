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