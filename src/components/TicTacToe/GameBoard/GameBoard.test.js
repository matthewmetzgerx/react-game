import React from 'react';
import GameBoard from "./GameBoard";
import Tile from "./Tile/Tile";
import {mount} from "enzyme/build";

it('renders gameboard reading undefined gameState and empty moves array', () => {
    let myprops = {gameState: undefined, moves:[]};
    const gameboard = mount( <GameBoard {...myprops} />);
    expect(gameboard.find(Tile)).toHaveLength(9);
});
