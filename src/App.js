// src/App.js
import React from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ChessBoard from "./components/ChessBoard";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Chessboard Game</h1>
        <ChessBoard />
      </div>
    </Provider>
  );
}

export default App;
