import React, { Component } from 'react';
import './Tile.css';

export default class Tile extends Component {

    tileClick = () => {
        this.props.cb({event:"tile-clicked", keyid:this.props.keyid});
    };

    getValue = () => {
        if (this.props.value === 1){
            return <i className="fas fa-times fa-4x marker" />;
        } else if (this.props.value === 2){
            return <i className="far fa-circle fa-3x marker" />;
        }
    };

    render() {
        if(this.props.value > 0 || !this.props.gameState){
            return(
                <div className={"tile"}>
                    {this.getValue()}
                </div>
            )
        } else {
            return(
                <div className={"tile clickable"} onClick={this.tileClick}>
                    {this.getValue()}
                </div>
            )
        }
    }
}
