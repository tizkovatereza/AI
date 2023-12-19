const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2024-01-01T00:00:00').getTime();

function updateCountdown() {
  const currentTime = new Date().getTime();
  const distance = targetDate - currentTime;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.textContent = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  if (distance < 0) {
    clearInterval(interval);
    countdownElement.textContent = 'EXPIRED';
  }
}

const interval = setInterval(updateCountdown, 1000);
