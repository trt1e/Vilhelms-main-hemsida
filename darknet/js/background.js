const inputOptions = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

window.addEventListener("load", () => { renderAllText(); });
window.addEventListener("resize", () => { renderAllText(); });

function renderAllText() {
    const bgText = document.getElementById("background");

    let randomCharacters = "";
    console.log((window.innerWidth * window.innerHeight) / 200);
    for (let character = 0; character <= (window.innerWidth * window.innerHeight) / 200; character++) {
        const getRandomCharacter = inputOptions[Math.floor(Math.random() * inputOptions.length)];
        randomCharacters += getRandomCharacter;
    };

    bgText.innerText = randomCharacters;
};
