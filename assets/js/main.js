const container = document.getElementById('confetti-container');

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');

    const xPos = Math.random() * window.innerWidth;
    const fallDuration = Math.random() * 3 + 2; // Randomizing fall duration

    confetti.style.left = `${xPos}px`;
    confetti.style.animationDuration = `${fallDuration}s`;

    container.appendChild(confetti);

    setTimeout(() => {
        container.removeChild(confetti);
    }, fallDuration * 1000); // Remove confetti after animation ends
}

function startConfetti() {
    for (let i = 0; i < 100; i++) {
        createConfetti();
    }
}

// Call the confetti function when the page loads
window.onload = startConfetti;
