function Square({value, onSquareClick}) {
    const style = value === "X" ? "square x" : "square o";
    
    return <button className={style} onClick={onSquareClick}>
        {value}
    </button>;
  }

export default Square;