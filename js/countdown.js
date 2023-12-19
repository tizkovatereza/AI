const targetDate = new Date('2024-01-01T00:00:00Z');

function updateCountdown() {
  const currentTime = new Date();
  const difference = targetDate - currentTime;

  let secondsLeft = Math.floor(difference / 1000);
  let minutesLeft = Math.floor(secondsLeft / 60);
  let hoursLeft = Math.floor(minutesLeft / 60);
  let daysLeft = Math.floor(hoursLeft / 24);

  secondsLeft %= 60;
  minutesLeft %= 60;
  hoursLeft %= 24;

  document.getElementById('days').textContent = daysLeft;
  document.getElementById('hours').textContent = hoursLeft;
  document.getElementById('minutes').textContent = minutesLeft;
  document.getElementById('seconds').textContent = secondsLeft;
}

setInterval(updateCountdown, 1000);
