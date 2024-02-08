export function calculateWinner(squares) {
    const lines = [
        // Horizontal
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        // Vertical
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        // Diagonal
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }

    for (let i = 0; i < squares.length; i++) {
        if (!squares[i])
            return null;
    }
    return 'Draw';
}

export default function Status({ xBoardIsNext, board}) {
    const winner = calculateWinner(board);
    let status, promptText;
    if (!winner) {
        status = (xBoardIsNext ? "X" : "O");
        promptText = "Next player: " + status;
    } else if (winner !== "Draw") {
        status = "win";
        promptText = "Winner: " + winner;
    } else {
        status = "draw";
        promptText = "Match is drawn";
    }
    
    return (
        <div className='statusBar'>
            {status === "X" || status === "draw" ? (
                <div className='status x-score'>{promptText}</div>
            ) : (
                <div className='status o-score'>{promptText}</div>
            )}
        </div>
    );
}
