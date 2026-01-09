/* ==============================
   AI LAUNCH COUNTDOWN (OPTIMIZED)
   1 Year + 10 Months From Now
================================ */

// Calculate target date dynamically
const launchDate = new Date();
launchDate.setFullYear(launchDate.getFullYear() + 1);
launchDate.setMonth(launchDate.getMonth() + 10);

const dayEl = document.getElementById("days");
const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const distance = launchDate.getTime() - now;

  if (distance <= 0) {
    dayEl.textContent = "00";
    hourEl.textContent = "00";
    minuteEl.textContent = "00";
    secondEl.textContent = "00";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dayEl.textContent = String(days).padStart(2, "0");
  hourEl.textContent = String(hours).padStart(2, "0");
  minuteEl.textContent = String(minutes).padStart(2, "0");
  secondEl.textContent = String(seconds).padStart(2, "0");
}

// Run immediately and every second
updateCountdown();
setInterval(updateCountdown, 1000);


// EMAIL NOTIFY (Frontend only)
const form = document.getElementById("notifyForm");
const msg = document.getElementById("notifyMsg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const email = document.getElementById("notifyEmail").value.trim();

  if (!email.includes("@")) {
    msg.textContent = "Please enter a valid email.";
    msg.style.color = "#ff6b6b";
    return;
  }

  msg.textContent = "🎉 You’ll be notified at launch!";
  msg.style.color = "#25d366";
  form.reset();
});
