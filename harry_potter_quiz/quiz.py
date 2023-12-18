import random

# Define a class to represent a Harry Potter character quiz
class HarryPotterCharacterQuiz:
    def __init__(self):
        # Questions and answers bank
        self.questions = [
            ("Which subject at Hogwarts do you like the most?", ["Defense Against the Dark Arts", "Potions", "Herbology", "Divination", "Transfiguration"]),
            ("Pick an animal:", ["Owl", "Cat", "Toad", "Rat", "Phoenix"]),
            ("Which trait do you admire the most?", ["Bravery", "Loyalty", "Intelligence", "Ambition", "Creativity"])
        ]
        # Potential results
        self.characters = ["Harry Potter", "Ron Weasley", "Hermione Granger", "Draco Malfoy", "Luna Lovegood"]

    def take_quiz(self):
        print("Welcome to the Harry Potter Character Quiz!\n")
        scores = [0] * len(self.characters)
        # Ask questions and update scores
        for question, answers in self.questions:
            print(question)
            for i, answer in enumerate(answers):
                print(f"{i + 1}. {answer}")
            choice = int(input("Your choice (number): ")) - 1
            scores[choice] += 1

        # Determine the character
        max_score = max(scores)
        indices = [i for i, score in enumerate(scores) if score == max_score]
        character = random.choice(indices)
        print(f"\nYou are most like: {self.characters[character]}!")

# Create a quiz instance and start the quiz
quiz = HarryPotterCharacterQuiz()
quiz.take_quiz()
