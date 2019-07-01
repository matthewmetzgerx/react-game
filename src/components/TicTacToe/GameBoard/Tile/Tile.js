import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {

    constructor(props) {
        super(props);
        console.log(props);
    }

    tileClick = () => {
        console.log("tile clicked");
    }

    render() {
        return(
            <div className={"tile"} onClick={this.tileClick}>
                tile
            </div>
        )
    }
}
