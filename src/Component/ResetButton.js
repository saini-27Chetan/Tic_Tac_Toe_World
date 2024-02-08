function ResetButton({board, setBoard, setBoardXIsNext}){
    function resetGame(){
        const squaresTemp = board.slice();
        for(let i=0; i<board.length; i++){
          squaresTemp[i]=null;
          setBoard(squaresTemp)
        }
        setBoardXIsNext(true);
    }
    
    return <button className='resetButton' onClick={resetGame}>Reset the Game</button>
}

export default ResetButton;