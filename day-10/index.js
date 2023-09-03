const button = document.querySelector('.getJoke');
let jokeContent = document.querySelector('.jokeContent');

button.addEventListener('click', async function() {
    let joke = await fetch('https://icanhazdadjoke.com/',{
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        }
    })
    .then(response => response.json());
    jokeContent.innerHTML = joke.joke;
})