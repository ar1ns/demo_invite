const canvas = document.getElementById("rippleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ripples = [];

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

canvas.addEventListener("mousemove", (e) => {
    createRipple(e.clientX, e.clientY);
});

canvas.addEventListener("touchmove", (e) => {
    const touch = e.touches[0];
    createRipple(touch.clientX, touch.clientY);
});

function createRipple(x, y) {
    const ripple = {
        x: x,
        y: y,
        radius: 0,
        maxRadius: 5,
        alpha: 1
    };
    ripples.push(ripple);
}

function drawRipples() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#B1EDE8"; // Blue background
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ripples.forEach((ripple, index) => {
        ripple.radius += 1;
        ripple.alpha -= 0.02;

        ctx.beginPath();
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 255, 255, ${ripple.alpha})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        if (ripple.alpha <= 0) {
            ripples.splice(index, 1);
        }
    });

    requestAnimationFrame(drawRipples);
}

drawRipples();
