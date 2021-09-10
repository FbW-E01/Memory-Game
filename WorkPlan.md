# Plan to make the Game

## ToDo list

- Figure out how the application works (Why npm serve?)

- Initially only question marks are displayed
    - When start button is clicked the card are loaded

- Show cards for 500 milliseconds and flip back.

## TASK 1: OUTLOOK

- Make html template (inject with JavaScript?)
    - 16 Divs with images (8 pairs)
        - Loaded with start button
    - Make the back side as well (transform with CSS)

## TASK 2

- Click on two cards
    - Are they the same?
        - Yes: remain transformed
        - No: turn back (setTimeout 1000 milliseconds)

## TASK 3: scores manager

- Make the points functionality
    - Finding every pair of pictures, will have 12.5 points for the user. But after 3 consecutive mistakes, the users points should reset to zero.

    - create points counter
    -Fails counter if = 3 reset points counter to 0
    -Function to Reset flips, reset points
   
## TASK: Playtime manager

- Timer functionality.
 - Flipped cards counter : game over after 8 matches


## TASK

- Shuffle the cards randomly.