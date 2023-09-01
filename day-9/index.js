const applause = document.getElementById('applause');
const applauseSound = document.getElementById('applauseSound');

applause.addEventListener('click', function() {
    if (applauseSound) {
        applauseSound.play();
    }
});

const boom = document.getElementById('boom');
const boomSound = document.getElementById('boomSound');

boom.addEventListener('click', function() {
    if (boomSound) {
        boomSound.play();
    }
});


const gasp = document.getElementById('gasp');
const gaspSound = document.getElementById('gaspSound');

gasp.addEventListener('click', function() {
    if (gaspSound) {
        gaspSound.play();
    }
});


const wrong = document.getElementById('wrong');
const wrongSound = document.getElementById('wrongSound');

wrong.addEventListener('click', function() {
    if (wrongSound) {
        wrongSound.play();
    }
});