const countdown = (duration) => {
  const end = Date.now() + duration;
  const timer = setInterval(() => {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) {
      clearInterval(timer);
      console.log('Countdown finished.');
      return;
    }
    console.log(`Time left: ${Math.floor(timeLeft / 1000)} seconds`);
  }, 1000);
};

// Example usage:
// countdown(10000); // Starts a 10-second countdown
