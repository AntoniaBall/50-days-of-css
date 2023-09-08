let content = document.querySelector('.content');
let closeButton = document.querySelector('.closeButton');
let openButton = document.querySelector('.openButton');

function displayContent() {
    content.classList.add('show');
    closeButton.style.display = 'block';
    openButton.style.display = 'none';
}

function disabledContent() {
    content.classList.remove('show');
    closeButton.style.display = 'none';
    openButton.style.display = 'block';
}