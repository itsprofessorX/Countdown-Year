function updateCountdown() {
    const targetDate = new Date("January 1, 2026 00:00:00").getTime();
    const now = new Date().getTime();
    const distance = targetDate - now;
  
    if (distance <= 0) {
      document.getElementById("countdown").innerHTML = "🎆 Happy New Year 2026!";
      return;
    }
  
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    document.getElementById("countdown").innerHTML =
      `There are <span class="number">${days}</span> days, 
      <span class="number">${hours}</span> hours, 
      <span class="number">${minutes}</span> minutes, and 
      <span class="number">${seconds}</span> seconds left until 2026.`;
  }
  
  function applyTheme(isDark) {
    document.body.classList.toggle('dark', isDark);
    document.getElementById('modeToggle').checked = isDark;
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  
  document.getElementById('modeToggle').addEventListener('change', (e) => {
    applyTheme(e.target.checked);
  });
  
  function loadTheme() {
    const saved = localStorage.getItem('theme');
    applyTheme(saved === 'dark');
  }
  
  loadTheme();
  setInterval(updateCountdown, 1000);
  updateCountdown();
  
