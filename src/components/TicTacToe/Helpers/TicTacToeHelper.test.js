import TTTHelper from "./TicTacToeHelper"

let ttthelp = new TTTHelper();

it('should return an X based on even move count', () => {
    const move = ttthelp.whoMove(2);
    expect(move).toBe('X');
});

it('should return an O based on odd move count', () => {
    const move = ttthelp.whoMove(3);
    expect(move).toBe('O');
});

it('should set initial state on load and validate setCurrentState, getCurrentState', () => {

    let mockInitialState = {
        game: {
            gameState: undefined,
            moves: 0,
            moveseq: [],
            tiles: [0,0,0,0,0,0,0,0,0]
        },
        messaging:{
            message: "Press \"Start Game\" to begin!",
            messageClass: "default-test"
        }
    };

    ttthelp.setCurrentState(mockInitialState);
    expect(ttthelp.currentState).toEqual({
        game: {
            gameState: undefined,
            moves: 0,
            moveseq: [],
            tiles: [0,0,0,0,0,0,0,0,0]
        },
        messaging:{
            message: "Press \"Start Game\" to begin!",
            messageClass: "default-test"
        }
    });

    expect(ttthelp.getCurrentState()).toEqual({
        game: {
            gameState: undefined,
            moves: 0,
            moveseq: [],
            tiles: [0,0,0,0,0,0,0,0,0]
        },
        messaging:{
            message: "Press \"Start Game\" to begin!",
            messageClass: "default-test"
        }
    });
});

it('should update gameState to in-progress upon game start', () => {
    // start-game
    let eventobj = {event: "start-game"};
    let newState = ttthelp.updateGameState(eventobj);
    expect(newState).toEqual({
        game:{
            gameState: "in-progress",
            moves: 0,
            tiles: [0,0,0,0,0,0,0,0,0],
            moveseq: []
        },
        messaging:{
            message: "X player, take your turn!",
            messageClass: "makemove"
        }
    })
});

// in-progress
// tile-clicked - can determine win/draw
// reset-game
// revert-move
