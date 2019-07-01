import React from 'react';
import GameBoard from "./GameBoard";
import {mount} from "enzyme/build";

it('renders gameboard reading undefined gameState and empty moves array', () => {
    let myprops = {gameState: undefined, moves:[]};
    const gameboard = mount( <GameBoard {...myprops} />);
    it('loads Empty tile components', () => {
        expect(gameboard.find('Tile')).toHaveLength(9);
    });
});
