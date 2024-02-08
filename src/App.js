import { useState } from 'react';
import './App.css';
import Square from './Component/Square';
import ResetButton from './Component/ResetButton';
import Header from './Component/Header';
import Status, {calculateWinner} from './Component/Status';

function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i){
    // To have a check that the square with 'X' or 'O' in it does not changes
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    xIsNext? nextSquares[i] = "X" : nextSquares[i] = "O";

    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <Header />

      <Status board={squares} xBoardIsNext={xIsNext}/>
      
      <div className='board'>
        <div className='boardRow'>
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>
        <div className='boardRow'>
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>
        <div className='boardRow'>
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </div>

      <ResetButton board={squares} setBoard={setSquares} setBoardXIsNext={setXIsNext}/>
    </>
  );
}
  
export default Board;
