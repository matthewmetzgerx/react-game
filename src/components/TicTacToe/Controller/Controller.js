import React, { Component } from 'react';
import './Controller.css';
import Button from "../../Elements/Button/Button";

export default class Controller extends Component {
    render() {

            // consider other states
            return(
                <div className={"controller"}>
                    <Button gameState={this.props.gameState} text="Start Game" event="start-game" />
                </div>
            )
    }
}
