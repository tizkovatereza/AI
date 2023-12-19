const countdownElement = document.getElementById('countdown');

const targetDate = new Date('Dec 31, 2023 23:59:59').getTime();

const countdown = () => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

  if (distance < 0) {
    clearInterval(interval);
    countdownElement.innerHTML = 'EXPIRED';
  }
};

const interval = setInterval(countdown, 1000);