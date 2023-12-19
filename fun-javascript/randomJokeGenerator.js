// Fun JavaScript Program: Random Joke Generator

// List of jokes to randomly select from
const jokes = [
  "Why was the math book sad? It had too many problems.",
  "What do you call fake spaghetti? An impasta!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Did you hear about the Italian chef that died? He pasta away.",
  "What do you call an alligator in a vest? An investigator!"
];

// Function to get a random joke
function getRandomJoke() {
  const index = Math.floor(Math.random() * jokes.length);
  return jokes[index];
}

// Display a random joke
console.log(getRandomJoke());