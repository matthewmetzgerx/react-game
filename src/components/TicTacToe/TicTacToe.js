import React, { Component } from 'react';
import './TicTacToe.css';
import GameBoard from "./GameBoard/GameBoard";

export default class TicTacToe extends Component {
    render() {
        return(
            <div className={"tictactoe"}>
                <GameBoard />
            </div>
        )
    }
}
