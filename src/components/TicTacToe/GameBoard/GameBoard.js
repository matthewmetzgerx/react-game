import React, { Component } from 'react';
import './GameBoard.css';
import Tile from "./Tile/Tile";

export default class GameBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tiles: [0,0,0,0,0,0,0,0,0]
        };
        // 0 is unselected, 1 is X, 2 is O
    }

    render() {
        const tiles = []
        for (const [index, value] of this.state.tiles.entries()) {
            tiles.push(<Tile key={index} className={"tile"}>{value}</Tile>)
        }
        return(
            <div className={"gameboard"}>
                {tiles}
            </div>
        )
    }
}
