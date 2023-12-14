// Blackjack Basic Strategy Explainer

/*
This program provides insight into the basic blackjack strategy which helps players
make decisions during a game of blackjack. The strategy is based on statistical
probabilities and is considered the optimal way to play each hand.
*/

function explainBlackjackStrategy() {
  // Basic Strategy Rules
  let strategy = {
    hardTotals: {
      // Decisions for hard totals (totals without an ace counted as 11)
      '8 or less': 'Hit',
      '9': 'Hit, unless the dealer has 3 through 6, then Double',
      '10 or 11': 'Double if you have more than the dealer, otherwise Hit',
      '12 to 16': 'Stand if dealer has 2 to 6, otherwise Hit',
      '17 to 21': 'Always Stand'
    },
    softTotals: {
      // Decisions for soft totals (totals with an ace counted as 11)
      '13 to 15': 'Hit',
      '16 to 18': 'Double if dealer has 2 to 6, otherwise Hit',
      '19 to 21': 'Always Stand'
    },
    pairs: {
      // Decisions for when you have a pair
      'Aces or 8s': 'Always Split',
      '2s, 3s, 6s, 7s, or 9s': 'Split if dealer has 2 to 6, otherwise Hit',
      '4s': 'Hit',
      '5s': 'Double if dealer has 2 to 9, otherwise Hit',
      '10s': 'Always Stand'
    }
  };

  return strategy;
}

// The function can be enhanced by adding more complex rules, or by implementing
// a user-friendly interface to interact with the strategy guidelines.

module.exports = { explainBlackjackStrategy };
