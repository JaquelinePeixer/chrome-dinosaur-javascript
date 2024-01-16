const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const time = document.getElementById("time");
const gameOver = document.getElementById("gameOver");
let start = false;
let cronometro;

function jump() {
    if (dino.classList != "jump") {
        dino.classList.add("jump");

        setTimeout(function () {
            dino.classList.remove("jump");
        }, 700);
    }
}

let isAlive = setInterval(function () {
    let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusLeft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    //detect collision
    if (cactusLeft < 60 && cactusLeft > 20 && dinoTop >= 45) {
        alert("Gamer Over");
        gameOver.classList.add("visible");
        inicial();
    }
}, 10)

function timeStarted() {
    let i = 0;
    cronometro = setInterval(() => {
        i++
        let tempo = String(i).padStart(6, "0");
        time.innerHTML = tempo;
    }, 100);
}

document.addEventListener("keydown", function (event) {
    if (start === false) {
        let tempo = String(0).padStart(6, "0");
        time.innerHTML = tempo;
        gameOver.classList.remove("visible");
        start = true;
        timeStarted();
    }
    cactus.classList.add("animationCactus");
    jump();
})

function inicial() {
    start = false;
    cactus.classList.remove("animationCactus");
    clearInterval(cronometro);

}