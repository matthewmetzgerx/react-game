import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {

    tileClick = () => {
        console.log("tile clicked");
    };

    render() {
        return(
            <div className={"tile"} onClick={this.tileClick}>
                tile
            </div>
        )
    }
}
