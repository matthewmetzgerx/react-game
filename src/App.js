import React from 'react';
import './App.css';
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React Tic-Tac-Toe Demo
      </header>
      <div className={"container"}>
          <TicTacToe />
      </div>
    </div>
  );
}

export default App;
