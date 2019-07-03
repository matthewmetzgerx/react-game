import React, { Component } from 'react';
import './TicTacToe.css';
import GameBoard from "./GameBoard/GameBoard";
import Messaging from "./Messaging/Messaging";
import Controller from "./Controller/Controller";

export default class TicTacToe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            game: {
                gameState: undefined,
                moves: []
            },
            messaging:{
                message: "Press \"Start Game\" to begin!",
                messageClass: "default"
            }
        };
    }

    // set event delegator
    // set reset messaging

    render() {
        return(
            <div className={"tictactoe"}>
                <Messaging message={this.state.messaging.message} messageClass={this.state.messaging.messageClass} />
                <GameBoard />
                <Controller gameState={this.state.game.gameState} />
            </div>
        )
    }
}
