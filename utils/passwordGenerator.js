function generateRandomPassword(length, withNumbers, withSymbols) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+-=[]{}|;:",.<>?/`~';

  let characters = letters;
  if (withNumbers) {
    characters += numbers;
  }
  if (withSymbols) {
    characters += symbols;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}

module.exports = generateRandomPassword;