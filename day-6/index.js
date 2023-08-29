const content = document.querySelectorAll('.content');

window.addEventListener('scroll', checkContents);

checkContents();

function checkContents() {
    const bottomContents = window.innerHeight / 5 * 4;

    content.forEach(box => {
        const topContent = box.getBoundingClientRect().top;

        if (topContent < bottomContents) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}