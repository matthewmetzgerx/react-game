
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
    winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

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

            if (eventState.game.moves+1 >= 5 && this.isWin(tiles, eventState.game.moves+1)) {
                eventState = {
                    game:{ gameState: undefined, moves: eventState.game.moves+1, tiles: tiles, moveseq: moveseq },
                    messaging:{ message: this.whoMove(eventState.game.moves) + " won! Press \"Start Game\" to play again!", messageClass: "win" }
                };
            } else if ((eventState.game.moves+1) === 9) {
                eventState = {
                    game:{ gameState: undefined, moves: eventState.game.moves+1, tiles: tiles, moveseq: moveseq },
                    messaging:{ message: "It's a draw! Press \"Start Game\" to play again!", messageClass: "draw" }
                };
            } else {
                eventState = {
                    game:{ gameState: "in-progress", moves: eventState.game.moves+1, tiles: tiles, moveseq: moveseq },
                    messaging:{ message: this.whoMove(eventState.game.moves+1) + " player, take your turn!", messageClass: "makemove" }
                };
            }
        } else if (eventobj.event === "reset-game") {
            eventState= {
                game: {gameState: undefined, moves: 0, moveseq: [], tiles: [0, 0, 0, 0, 0, 0, 0, 0, 0]},
                messaging: {message: "Press \"Start Game\" to begin!", messageClass: "default"}
            };

        } else if (eventobj.event === "revert-move") {

            let ms = eventState.game.moveseq.slice(0, eventState.game.moveseq.length -1);
            let tiles = eventState.game.tiles.slice();
            let ind = eventState.game.moveseq[eventState.game.moveseq.length - 1];
            tiles[ind] = 0;

            eventState = {
                game:{ gameState: "in-progress", moves: eventState.game.moves-1, tiles: tiles, moveseq: ms},
                messaging:{ message: this.whoMove(eventState.game.moves-1) + " player, take your turn!", messageClass: "makemove" }
            };
        }

        this.setCurrentState(eventState);
        // returns updated state
        return eventState;
    };

    isWin = (tiles, moves) => {
        let selector = (moves % 2) ? 1 : 2;
        let selected = [];
        let ret = false;

        for ( let i = 0; i < tiles.length; i++){
            if(tiles[i] === selector){
                selected.push(i);
            }
        }

        let ignore = false;
        this.winConditions.forEach(function (cond) {
            if (cond.every(function(val) { return selected.indexOf(val) >= 0; }) && !ignore ){
                ret = ignore = true;
            }
        });
        return ret;
    }
}

export default TTThelper;
