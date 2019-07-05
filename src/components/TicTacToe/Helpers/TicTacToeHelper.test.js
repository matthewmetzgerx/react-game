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

it('should set gameState to undefined and reset entire state object on reset-game', () => {
    // reset-game

    let mockInitialState = {
        game: {
            gameState: "in-progress",
            moves: 1,
            moveseq: [0],
            tiles: [1,0,0,0,0,0,0,0,0]
        },
        messaging:{
            message: "O player, take your turn!",
            messageClass: "makemove"
        }
    };
    ttthelp.setCurrentState(mockInitialState);

    let eventobj = {event: "reset-game"};
    let newState = ttthelp.updateGameState(eventobj);
    expect(newState).toEqual({
        game: {
            gameState: undefined,
            moves: 0,
            moveseq: [],
            tiles: [0, 0, 0, 0, 0, 0, 0, 0, 0]},
        messaging: {
            message: "Press \"Start Game\" to begin!",
            messageClass: "default"
        }
    })
});

it('should subtract moves by 1 and remove last moveseq value on revert-move', () => {
    // revert-move

    let mockInitialState = {
        game: {
            gameState: "in-progress",
            moves: 1,
            moveseq: [0],
            tiles: [1,0,0,0,0,0,0,0,0]
        },
        messaging:{
            message: "O player, take your turn!",
            messageClass: "makemove"
        }
    };

    ttthelp.setCurrentState(mockInitialState);
    let eventobj = {event: "revert-move"};
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

it('should determine win if moves greater >= 5 and sequence matches win conditions array', () => {
    // tile clicked

    let mockInitialState = {
        game: {
            gameState: "in-progress",
            moves: 4,
            moveseq: [0,1,3,4],
            tiles: [1,2,0,1,2,0,0,0,0]
        },
        messaging:{
            message: "X player, take your turn!",
            messageClass: "makemove"
        }
    };

    ttthelp.setCurrentState(mockInitialState);
    let eventobj = {event: "tile-clicked", keyid: 6};
    let newState = ttthelp.updateGameState(eventobj);
    expect(newState).toEqual({
        game:{
            gameState: undefined,
            moves: 5,
            tiles: [1,2,0,1,2,0,1,0,0],
            moveseq: [0,1,3,4,6]
        },
        messaging:{
            message: "X won! Press \"Start Game\" to play again!",
            messageClass: "win"
        }
    })
});

it('should determine draw if moves == 9 and there is no win', () => {
    // tile clicked

    let mockInitialState = {
        game: {
            gameState: "in-progress",
            moves: 8,
            moveseq: [0,1,2,3,5,4,6,8],
            tiles: [1,2,1,2,2,1,1,1,0]
        },
        messaging:{
            message: "X player, take your turn!",
            messageClass: "makemove"
        }
    };

    ttthelp.setCurrentState(mockInitialState);
    let eventobj = {event: "tile-clicked", keyid: 7};
    let newState = ttthelp.updateGameState(eventobj);
    expect(newState).toEqual({
        game:{
            gameState: undefined,
            moves: 9,
            tiles: [1,2,1,2,2,1,1,1,0],
            moveseq: [0,1,2,3,5,4,6,8,7]
        },
        messaging:{
            message: "It's a draw! Press \"Start Game\" to play again!",
            messageClass: "draw"
        }
    })
});


it('should increment moves and sequence if not win and moves less than 9', () => {
    // tile clicked

    let mockInitialState = {
        game: {
            gameState: "in-progress",
            moves: 1,
            moveseq: [0],
            tiles: [1,0,0,0,0,0,0,0,0]
        },
        messaging:{
            message: "O player, take your turn!",
            messageClass: "makemove"
        }
    };

    ttthelp.setCurrentState(mockInitialState);
    let eventobj = {event: "tile-clicked", keyid: 1};
    let newState = ttthelp.updateGameState(eventobj);
    expect(newState).toEqual({
        game:{
            gameState: "in-progress",
            moves: 2,
            tiles: [1,2,0,0,0,0,0,0,0],
            moveseq: [0,1]
        },
        messaging:{
            message: "X player, take your turn!",
            messageClass: "makemove"
        }
    })
});

it('win method should compare tile selections and moves against win conditions to determine if win - TRUE condition', () => {
    let tiles = [1,2,0,1,2,0,1,0,0];
    let moves = 5;
    ttthelp.winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    expect(ttthelp.isWin(tiles, moves)).toEqual(true)
});

it('win method should compare tile selections and moves against win conditions to determine if win - FALSE condition', () => {
    let tiles = [1,2,0,1,2,0,0,1,0];
    let moves = 5;
    ttthelp.winConditions = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    expect(ttthelp.isWin(tiles, moves)).toEqual(false)
});
