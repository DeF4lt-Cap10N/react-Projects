import React, { useEffect, useState } from "react";
import "../index.css";

const Square = ({ value, onClick }) => {
  return (
    <>
      <button onClick={onClick} className="square">
        {value}
      </button>
    </>
  );
};

const TicTacToe = () => {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [turnX, setTurnX] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    let WinnerArray = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < WinnerArray.length; i++) {
      let [x, y, z] = WinnerArray[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[y] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function onClickHnadle(currIdx) {
    let copyArray = [...squares];
    if (getWinner(copyArray) || copyArray[currIdx]) return;
    copyArray[currIdx] = turnX ? "X" : "O";
    setTurnX(!turnX);
    setSquares(copyArray);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("your match is draw! Plese restart it");
    } else if (getWinner(squares)) {
      setStatus(`${getWinner(squares)} is Winner!!`);
    } else {
      setStatus(`Next PLayer is : ${turnX ? "X" : "O"}`);
    }
  }, [squares, turnX]);

  function handleRestart() {
    setSquares(Array(9).fill(""));
    setTurnX(true);
  }

  console.log(squares);
  return (
    <>
      <div className="tic-tac-toeContainer">
        <div className="row">
          <Square value={squares[0]} onClick={() => onClickHnadle(0)} />
          <Square value={squares[1]} onClick={() => onClickHnadle(1)} />
          <Square value={squares[2]} onClick={() => onClickHnadle(2)} />
        </div>
        <div className="row">
          <Square value={squares[3]} onClick={() => onClickHnadle(3)} />
          <Square value={squares[4]} onClick={() => onClickHnadle(4)} />
          <Square value={squares[5]} onClick={() => onClickHnadle(5)} />
        </div>
        <div className="row">
          <Square value={squares[6]} onClick={() => onClickHnadle(6)} />
          <Square value={squares[7]} onClick={() => onClickHnadle(7)} />
          <Square value={squares[8]} onClick={() => onClickHnadle(8)} />
        </div>

        <button className="reset" onClick={handleRestart}>
          Restart
        </button>
      </div>
      <h1 className="status">{status}</h1>
    </>
  );
};

export default TicTacToe;
