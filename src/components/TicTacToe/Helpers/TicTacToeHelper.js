
class TTThelper {

    initialState = {
        game: {
            gameState: undefined,
            moves: 0,
            moveseq: [],
            tiles: [0,0,0,0,0,0,0,0,0]
        },
        messaging:{
            message: "Press \"Start Game\" to begin!",
            messageClass: "default"
        }
    };

    // should be private
    currentState = this.initialState;

    getCurrentState = () => {
        return this.currentState;
    };

    setCurrentState = (stateobj) => {
        this.currentState = stateobj;
    };

    whoMove = (moves) => {
        return moves % 2 === 0 ? "X" : "O";
    };

    updateGameState = (eventobj) => {
        let eventState = this.getCurrentState();


        // state manager events
        // start-game
        // in-progress
        // tile-clicked - can determine win/draw
        // reset-game
        // revert-move

        this.setCurrentState(eventState);
        // returns updated state
        return eventState;
    }

}

export default TTThelper;
