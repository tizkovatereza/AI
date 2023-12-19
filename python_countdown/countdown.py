# Python Countdown Program

import time

def countdown(t):
    while t:
        mins, secs = divmod(t, 60)
        timer = '{:02d}:{:02d}'.format(mins, secs)
        print(timer, end="\r")
        time.sleep(1)
        t -= 1
    print('Time is up!')


if __name__ == '__main__':
    try:
        t = input('Enter the time in seconds: ')
        countdown(int(t))
    except ValueError:
        print('Please enter a valid number of seconds.')
