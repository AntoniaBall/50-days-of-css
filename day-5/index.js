const counter = document.querySelector('.counter');
const container = document.querySelector('.container');

let counterLoad = 0;

let progress = setInterval(blurring, 50);

function blurring() {
    counterLoad++;
    if (counterLoad >= 99) {
        clearInterval(progress);
    }
    console.log('counterLoad', counterLoad);
    console.log('progress', progress);

    counter.innerHTML = `${counterLoad}%`;
    counter.style.opacity = scale(counterLoad, 0, 100, 1, 0);
    container.style.filter = `blur(${scale(counterLoad, 0, 100, 20, 0)}px)`;
}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}