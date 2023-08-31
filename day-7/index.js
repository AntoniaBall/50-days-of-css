const sectionLeft = document.getElementById('section1');
const sectionRight = document.getElementById('section2');
const container = document.querySelector('.container');
console.log(sectionLeft);
console.log(sectionRight);

sectionLeft.addEventListener('mouseover', leftHovered);
sectionRight.addEventListener('mouseover', rightHovered);

function leftHovered() {
    container.classList.add('hovered-left');
    container.classList.remove('hovered-right');
}

function rightHovered() {
    container.classList.add('hovered-right');
    container.classList.remove('hovered-left');
}