import React, { Component } from 'react';
import './Controller.css';
import Button from "../../Elements/Button/Button";

export default class Controller extends Component {

    callback = (event) => {
        // button callback
    };

    render() {
        if (this.props.gameState === undefined){
            return(
                <div className={"controller"}>
                    <Button gameState={this.props.gameState} text="Start Game" event="start-game" cb={this.callback} />
                </div>
            )
        }
    }
}
