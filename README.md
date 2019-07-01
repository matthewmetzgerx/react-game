## Code Demo
### Instructions
##### Create a ReactJS Web application for the game of tic-tac-toe. 

- The game should be a playable web application.  
- It should prompt users for their turn.  
- The game should determine the winner or if there is a tie.  
- The game should allow for rewinding of moves.  
- The game should be able to be reset without stopping the application.  
- Styling should be used for a pleasing aesthetic.  
- The use of multiple small components is valued.  

##### Additionally you must: 
- Write all code personally 
- Test Drive all changes 
- Utilize Jest or Mocha 
- Utilize Enzyme for Component Testing 
- Utilize public GitHub repo 
- Commit after writing each test 
- Commit after making each test pass 
- Done correctly you should have around 100 commits




### Breakdown

1. Has a game container which loads
    - if has loaded, continue
    - else indicate problem
    
2. Has a start/restart game button & event
    - if clicked, clear history
    - if clicked start
    - if reset/restart, prompt incomplete game
    - if reset/restart ok button click, clear
    - if reset/restart ok button click, start

3. Sets two players
    - Player objects are created    
    - Prompts players to go (mod selection events)

4. If game start/reset
    - clear board history
    - initialize board with tiles
    
5. If board is reset, set tile objects to start
    - If no selection event, leave at initial state
         
6. If game is active, allow selection
    - if player is active, allow click to unused tiles
    - used tiles emit inactive message ("this tile cannot be selected")
    - if a valid selection made
        - event logged to history
        - revert option will revert to history
        - if the move indicates a win/lose/draw, activate that component
        - active user will be toggled (mod events)
    
7. if win/lose/draw event + component
    - if win/lose/draw, promt reset/restart
    

### Components

- Game container
    - game board
        - tiles
    - revert & reset console area
    - messaging console (stateless)
    - Win messaging to entire container?

- Misc
    - button with callback,emit
    - possibly message component


### Testing

1. On existence/invoke
2. On state(s), !state(s)
3. On execution, !execution

