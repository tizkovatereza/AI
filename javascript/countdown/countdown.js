const countdownElement = document.getElementById('countdown');
const targetDate = new Date('2023-12-31T23:59:59').getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    countdownElement.textContent = `Days: ${days} Hours: ${hours} Minutes: ${minutes} Seconds: ${seconds}`;

    if (difference < 0) {
        clearInterval(interval);
        countdownElement.textContent = 'Happy New Year!';
    }
}

const interval = setInterval(updateCountdown, 1000);
