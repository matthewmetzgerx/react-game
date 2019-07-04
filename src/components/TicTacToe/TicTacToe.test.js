import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from "./TicTacToe";
import {mount} from "enzyme/build";

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TicTacToe />, div);
    ReactDOM.unmountComponentAtNode(div);
});

const tictactoe = mount(<TicTacToe />);

it('loads GameBoard component', () => {
    expect(tictactoe.find('GameBoard')).toHaveLength(1);
});

it('loads Messaging component', () => {
    expect(tictactoe.find('Messaging')).toHaveLength(1);
});

it('loads Controller component', () => {
    expect(tictactoe.find('Controller')).toHaveLength(1);
});

// State tests

// - default game state
it('is set to default game state', () => {
    expect(tictactoe.state().game.gameState).toEqual(undefined);
    expect(tictactoe.state().game.moves).toEqual([]);
});

it('should return current state from helper on instantiation', () => {
    let ttt = new TicTacToe();
    let initialState = ttt.state;
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
});


