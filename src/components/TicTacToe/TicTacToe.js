import React, { Component } from 'react';
import './TicTacToe.css';
import GameBoard from "./GameBoard/GameBoard";
import Messaging from "./Messaging/Messaging";
import Controller from "./Controller/Controller";

export default class TicTacToe extends Component {
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
