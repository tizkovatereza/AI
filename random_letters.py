import random
import string

# Generate five random letters
random_letters = ''.join(random.choice(string.ascii_lowercase) for _ in range(5))
print(random_letters)