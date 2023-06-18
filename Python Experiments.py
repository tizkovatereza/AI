class Player:
    def __init__(self, x, y):
        self.x = x  # player's x position
        self.y = y  # player's y position
        self.velocity_x = 0  # player's horizontal velocity
        self.velocity_y = 0  # player's vertical velocity
        self.speed = 5  # player's movement speed

    def update(self):
        # Update the player's position based on velocity
        self.x += self.velocity_x
        self.y += self.velocity_y
import pygame
from pygame.locals import *

# Initialize Pygame
pygame.init()

# Set up the game window
window_width = 800
window_height = 600
window = pygame.display.set_mode((window_width, window_height))
clock = pygame.time.Clock()
# Create the player
player = Player(100, 100)

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == QUIT:
            running = False
        elif event.type == KEYDOWN:
            if event.key == K_LEFT:
                player.velocity_x = -player.speed
            elif event.key == K_RIGHT:
                player.velocity_x = player.speed
            elif event.key == K_SPACE:
                # Jump mechanic
                if player.velocity_y == 0:  # Only allow jumping if player is on the ground
                    player.velocity_y = -10  # Set initial vertical velocity for jump

        elif event.type == KEYUP:
            if event.key == K_LEFT and player.velocity_x < 0:
                player.velocity_x = 0
            elif event.key == K_RIGHT and player.velocity_x > 0:
                player.velocity_x = 0

    # Update the player's position
    player.update()

    #