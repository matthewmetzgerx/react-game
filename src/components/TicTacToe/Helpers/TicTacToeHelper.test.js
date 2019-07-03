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
