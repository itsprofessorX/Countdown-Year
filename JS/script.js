function launchFireworks() {
  const duration = 5 * 1000;
  const animationEnd = Date.now() + duration;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
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
  const countdownBox = document.getElementById("countdown");

  const diff = newYear - now;

  if (diff <= 0) {
    countdownBox.textContent = "🎉 Happy New Year 2026! 🎉";
    if (!window._fireworksLaunched) {
      launchFireworks();
      window._fireworksLaunched = true;
    }
    return;
  }

  // Time left until 2026
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  // Time wasted since Jan 1, 2025
  const start2025 = new Date("January 1, 2025 00:00:00");
  let wastedDiff = now - start2025;
  wastedDiff = wastedDiff > 0 ? wastedDiff : 0;

  const wastedDays = Math.floor(wastedDiff / (1000 * 60 * 60 * 24));
  const wastedHours = Math.floor((wastedDiff / (1000 * 60 * 60)) % 24);
  const wastedMinutes = Math.floor((wastedDiff / (1000 * 60)) % 60);
  const wastedSeconds = Math.floor((wastedDiff / 1000) % 60);

  // Update HTML
  countdownBox.innerHTML = `
    ⏳ Time Left: There are <strong>${days}</strong> days, 
    <strong>${hours}</strong> hours, 
    <strong>${minutes}</strong> minutes, and 
    <strong>${seconds}</strong> seconds 
    <span class="left-text">left until 2026!</span>
    <br><br>
    🗑️ Time Wasted: <strong>${wastedDays}</strong> days, 
    <strong>${wastedHours}</strong> hours, 
    <strong>${wastedMinutes}</strong> minutes, and 
    <strong>${wastedSeconds}</strong> seconds 
    <span class="wasted-text">wasted in 2026.</span>
  `;
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown();

// Theme toggle logic
const modeToggle = document.getElementById("modeToggle");
document.body.classList.add("dark"); // Default to dark mode
modeToggle.checked = true;

modeToggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
