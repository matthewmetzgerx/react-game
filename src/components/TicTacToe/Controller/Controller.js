import React, { Component } from 'react';
import './Controller.css';
import Button from "../../Elements/Button/Button";

export default class Controller extends Component {

    callback = (event) => {
        this.props.cb({event: event});
    };

    render() {
        if (this.props.gameState === undefined){
            return(
                <div className={"controller"}>
                    <Button gameState={this.props.gameState} className="start-game" text="Start Game" event="start-game" cb={this.callback} />
                </div>
            )
        } else if ((this.props.gameState === "in-progress") && (this.props.moves > 0)){
            return(
                <div className={"controller"}>
                    <Button gameState={this.props.gameState} className="reset-game" text="Reset Game" event="reset-game" cb={this.callback} />
                    <Button gameState={this.props.gameState} className="revert-move" text="Revert Move" event="revert-move" cb={this.callback} />
                </div>
            )
        } else {
            return(
                <div className={"controller"}></div>
            )
        }
    }
}
