import React, { Component } from 'react';
import './TicTacToe.css';
import GameBoard from "./GameBoard/GameBoard";
import Messaging from "./Messaging/Messaging";
import Controller from "./Controller/Controller";
import TTTHelper from "./Helpers/TicTacToeHelper"

export default class TicTacToe extends Component {

    ttthelp = new TTTHelper();

    constructor(props) {
        super(props);
        this.state = this.ttthelp.getCurrentState();
    };

    delegator = (eventobj) => {
        // return to helper state manager and get new state.
        this.setState(this.ttthelp.updateGameState(eventobj));
    };

    render() {
        return(
            <div className={"tictactoe"}>
                <Messaging message={this.state.messaging.message} messageClass={this.state.messaging.messageClass} />
                <GameBoard cb={this.delegator} />
                <Controller cb={this.delegator} gameState={this.state.game.gameState} />
            </div>
        )
    }
}
