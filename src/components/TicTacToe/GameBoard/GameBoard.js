import React, { Component } from 'react';
import './GameBoard.css';
import Tile from "./Tile/Tile";

export default class GameBoard extends Component {

    callback = (vals) => {
        this.props.cb({event: vals.event, keyid: vals.keyid});
    };

    render() {
        const tiles = [];
        for (const [index, value] of this.props.tiles.entries()) {
            tiles.push(<Tile key={index} keyid={index} gameState={this.props.gameState} value={this.props.tiles[index]} className="tile" cb={this.callback}></Tile>)
        }

        return(
            <div className={"gameboard"}>
                {tiles}
            </div>
        )
    }
}
