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
      '8 or less': 'Hit \
    },
    softTotals: {
      // Decisions for soft totals (totals with an ace counted as 11)
      '13 to 15': 'Hit \
    },
    pairs: {
      // Decisions for when you have a pair
      'Aces or 8s': 'Always Split \
    }
  };

  return strategy;
}

// The function can be enhanced by adding more complex rules, or by implementing
// a user-friendly interface to interact with the strategy guidelines.

module.exports = { explainBlackjackStrategy };
