
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
    }

}

export default TTThelper;
