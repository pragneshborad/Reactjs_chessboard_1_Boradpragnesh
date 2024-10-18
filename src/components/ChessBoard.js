
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeColor } from "../redux/boardSlice";
import './ChessBoard.css'; 

const ChessBoard = () => {
  const board = useSelector((state) => state.board);
  const dispatch = useDispatch();

  const handleClick = (rowIndex, colIndex) => {
    dispatch(changeColor({ rowIndex, colIndex }));
  };

  return (
    <div className="chessboard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((square, colIndex) => (
            <div
              key={colIndex}
              className="square"
              style={{ backgroundColor: square.color }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ChessBoard;
