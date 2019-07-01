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
            }
        };
    }

    render() {
        return(
            <div className={"tictactoe"}>
                <Messaging />
                <GameBoard />
                <Controller />
            </div>
        )
    }
}
