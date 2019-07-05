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
        this.setState(this.ttthelp.updateGameState(eventobj));
    };

    render() {
        return(
            <div className={"tictactoe"}>
                <Messaging message={this.state.messaging.message} messageClass={this.state.messaging.messageClass} />
                <GameBoard cb={this.delegator} moves={this.state.game.moves} gameState={this.state.game.gameState} tiles={this.state.game.tiles} />
                <Controller cb={this.delegator} gameState={this.state.game.gameState} moves={this.state.game.moves}/>
            </div>
        )
    }
}
