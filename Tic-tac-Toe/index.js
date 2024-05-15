function gameBoard() {
    let board = ['-', '-', '-',
                 '-', '-', '-',
                 '-', '-', '-'];
    
    const placeToken = (token, cell) => {
        board[cell] = token;
    };
    const updateBoard = () => {
        //loop through array and update innerthml of each div with the id corresponding to the index of the array
    }

    const clearBoard = () => {
        board = ['-', '-', '-',
        '-', '-', '-',
        '-', '-', '-'];
    }
}

function gameController() {
    
    const playGame = () => {
        const payerOne = player('playerOne', 'X');
        const playerTwo = player('playerTwo', 'O');
    };
}

function player(name, token) {
    const name = name;
    const tokane = token;

    return {name, token};
}