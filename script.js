// Countdown Logic
const countdownDate = new Date("Nov 20, 2024 23:59:59").getTime();
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If countdown reaches zero
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("countdown-title").innerHTML = "Event Started!";
    }
}, 1000);

// Enable Audio on Hover After User Interaction
const textElement = document.getElementById('countdown-title');

// Function to enable audio on hover after a user interaction
function enableSound() {
    window.removeEventListener('click', enableSound);
    window.removeEventListener('touchstart', enableSound);

    textElement.addEventListener('mouseenter', () => {
        birthdaySound.currentTime = 0;
        birthdaySound.play();
    });

    textElement.addEventListener('mouseleave', () => {
        birthdaySound.pause();
    });
}

// Listen for user interaction to enable sound playback
window.addEventListener('click', enableSound);
window.addEventListener('touchstart', enableSound);

// Balloon Logic
const balloonCount = 15;
const balloonContainer = document.querySelector('.balloon-container');
const balloonColors = ['red-balloon.png', 'blue-balloon.png', 'yellow-balloon.png'];

for (let i = 0; i < balloonCount; i++) {
    const balloon = document.createElement('img');
    balloon.src = `images/${balloonColors[i % balloonColors.length]}`;
    balloon.classList.add('balloon');
    
    // Randomize position and properties
    balloon.style.left = `${Math.random() * 50}vw`;  // Restrict to 50% width
    balloon.style.animationDuration = `${Math.random() * 5 + 5}s`;
    balloon.style.width = `${Math.random() * 30 + 50}px`;
    balloon.style.opacity = 0.5;

    balloonContainer.appendChild(balloon);
}

// Get elements
const birthdayHat = document.getElementById('birthdayHat');
const birthdaySound = document.getElementById('birthdaySound');
const fallingItemsContainer = document.getElementById('fallingItemsContainer');

// Function to create falling item
function createFallingItem(src, className) {
    const item = document.createElement('img');
    item.src = `images/${src}`;  // Updated path to images folder
    item.className = `falling-item ${className}`;
    item.style.left = `${Math.random() * 90}vw`; // Randomize horizontal position
    item.style.width = `${Math.random() * 30 + 40}px`; // Random size between 40-70px
    fallingItemsContainer.appendChild(item);
}

// Handle birthday hat click
birthdayHat.addEventListener('click', () => {
    // Rotate the hat to the correct position
    birthdayHat.classList.add('rotated');
    
    // Play sound
    birthdaySound.currentTime = 0;
    birthdaySound.play();

    // Create 25 birthday caps and 25 gift boxes
    for (let i = 0; i < 25; i++) {
        createFallingItem('cap.png', 'falling-cap');      // Falling cap
        createFallingItem('gift-box.png', 'falling-box'); // Falling gift box
    }
});

