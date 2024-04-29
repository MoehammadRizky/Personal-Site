const adaConfetti = document.getElementById("confetti")
const confetti = require('canvas-confetti');
const Typed = require('typed.js')



const element = new Typed("#typedMessage", {
    strings: ["Lets Keep In Touch with Me!","Hi! wanna talk about me?"],
    typeSpeed: 30,
})

adaConfetti.addEventListener("click", () => {
    const myCanvas = document.createElement('canvas');
    myCanvas.style.width = "100vh";
    myCanvas.style.height = "100vh";
    myCanvas.style.position = "fixed"
    myCanvas.style.inset = 0;
    myCanvas.style.zIndex = 999;
    document.body.appendChild(myCanvas);

    const myConfetti = confetti.create(myCanvas, { resize: true, });

    myConfetti({
        particleCount: 750,
        spread: 160
        // any other options from the global
        // confetti function
    });
})