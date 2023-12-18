// This JavaScript code selects a random gift from a list of 10 items and prints it out

const gifts = [
  'Toy Train',
  'Teddy Bear',
  'Doll',
  'Puzzle',
  'Book',
  'Bicycle',
  'Video Game',
  'Scooter',
  'Lego Set',
  'Board Game'
];

function getRandomGift() {
  const randomIndex = Math.floor(Math.random() * gifts.length);
  return gifts[randomIndex];
}

console.log(`Your random Christmas gift is: ${getRandomGift()}`);