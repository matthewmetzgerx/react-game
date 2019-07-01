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
