// eslint-disable-next-line no-unused-vars
function setActiveElement(actualElement) {
    let actualExistingElement = document.querySelector('.active');
    actualExistingElement.classList.remove('active');
    actualElement.classList.add('active');
}