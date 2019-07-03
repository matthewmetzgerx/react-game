import TTTHelper from "./TicTacToeHelper"

let mockInitialState = {
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

let ttthelp = new TTTHelper();


it('should return an X based on even move count', () => {
    const move = TTTHelper.whoMove(2);
    expect(move).toBe('X');
});

it('should return an O based on even move count', () => {
    const move = TTTHelper.whoMove(3);
    expect(move).toBe('O');
});

it('should set initial state on load and validate setCurrentState, getCurrentState', () => {
    let initialState = ttthelp.setCurrentState(mockInitialState);
    expect(initialState).toEqual({
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
    });

    let currentState = ttthelp.getCurrentState();

    expect(currentState).toEqual({
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
    });
});
