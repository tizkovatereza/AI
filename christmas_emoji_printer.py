import random

# Correctly encoded christmas emojis
christmas_emojis = [
    '\U0001F384',  # Christmas Tree
    '\U0001F385',  # Santa Claus
    '\U0001F381',  # Wrapped Gift
    '\U0001F84B',  # Snowman
    '\U00002744',  # Snowflake
]

def print_random_emoji(count=1):
    """Prints a specified number of random christmas emojis."""
    for _ in range(count):
        print(random.choice(christmas_emojis), end=' ')

# Ensures this script can be imported without executing the print function.
if __name__ == "__main__":
    print_random_emoji()
