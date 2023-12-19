const countdown = (duration) => {
  let timerId, remaining = duration;

  console.log(`Starting countdown: ${remaining} seconds`);

  timerId = setInterval(() => {
    remaining--;
    console.log(`Time left: ${remaining} seconds`);

    if (remaining <= 0) {
      clearInterval(timerId);
      console.log('Countdown completed!');
    }
  }, 1000);
};

// To use:
// countdown(10); // Starts a 10 seconds countdown