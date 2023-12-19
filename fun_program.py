# Fun Python program

print('Hello! This is a fun Python program.')

# Now, something more interesting: a quick and simple guessing game.
import random

secret_number = random.randint(1, 10)
print('I am thinking of a number between 1 and 10.')

guess = None

while guess != secret_number:
    guess = int(input('Take a guess: '))
    if guess < secret_number:
        print('Your guess is too low.')
    elif guess > secret_number:
        print('Your guess is too high.')
    else:
        print('Good job! You guessed my number!')
