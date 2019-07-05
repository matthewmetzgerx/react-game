import React from 'react';
import GameBoard from "./GameBoard";
import Tile from "./Tile/Tile";
import {mount} from "enzyme/build";

it('renders gameboard reading undefined gameState and 0 moves', () => {
    let myprops = {gameState: undefined, moves:0, tiles: [0,0,0,0,0,0,0,0,0]};
    const gameboard = mount( <GameBoard {...myprops} />);
    expect(gameboard.find(Tile)).toHaveLength(9);
});
