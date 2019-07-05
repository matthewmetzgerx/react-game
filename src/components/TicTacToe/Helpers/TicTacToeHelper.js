
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

        if (eventobj.event === "start-game"){
            eventState = {
                game:{ gameState: "in-progress", moves: 0, tiles: [0,0,0,0,0,0,0,0,0], moveseq: [] },
                messaging:{ message: this.whoMove(0) + " player, take your turn!", messageClass: "makemove" }
            };

        } else if (eventobj.event === "tile-clicked"){
            let tiles = eventState.game.tiles;
            tiles[eventobj.keyid] = (eventState.game.moves % 2 === 0) ? 1 : 2;
            let moveseq = eventState.game.moveseq;
            moveseq.push(eventobj.keyid);

            eventState = {
                game:{ gameState: "in-progress", moves: eventState.game.moves+1, tiles: tiles, moveseq: moveseq },
                messaging:{ message: this.whoMove(eventState.game.moves+1) + " player, take your turn!", messageClass: "makemove" }
            };
        }

        // tile-clicked - can determine win/draw
        // reset-game
        // revert-move

        this.setCurrentState(eventState);
        // returns updated state
        return eventState;
    }
}

export default TTThelper;
