function launchFireworks() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    confetti({
      particleCount: 50,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      origin: {
        x: Math.random(),
        y: Math.random() - 0.2
      }
    });
  }, 250);
}

function updateCountdown() {
  const now = new Date();
  const newYear = new Date("January 1, 2026 00:00:00");
  const diff = newYear - now;

  const countdownBox = document.getElementById("countdown");

  if (diff <= 0) {
    countdownBox.textContent = "🎉 Happy New Year 2026! 🎉";
    if (!window._fireworksLaunched) {
      launchFireworks();
      window._fireworksLaunched = true;
    }
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  countdownBox.innerHTML = `There are <strong>${days}</strong> days, <strong>${hours}</strong> hours, <strong>${minutes}</strong> minutes, and <strong>${seconds}</strong> seconds left until 2026.`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Theme toggle
document.getElementById("modeToggle").addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
