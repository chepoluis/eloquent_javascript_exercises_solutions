function chessboard(size) {
    // My solution
    
    let column = 0;
    let row = 0;
    let res = ''
    let is_space = true;

    for (let i = 0; row < size; i++) {
        if (column < size) {
            if (row % 2 === 0) {
                is_space ? res += ' ' : res += '#';
            } else {
                is_space ? res += '#' : res += ' ';
            }
            is_space = !is_space;
            column++;
        } else {
            is_space = true; // Solution, reset the variable is_space = true, because the false value was saved in the next iretation, and if 
                             // enters an odd number, saved a blank space, instead of a #
            res += '\n';
            column = 0;
            row++;
        }
    }

    // My solution after see the book solution
    /*let column = 0;
    let row = 0;
    let res = ''
    let is_space = true;

    for (let i = 0; row < size; i++) {
        if (column < size) {
            if ((row + column) % 2 === 0) {
                //is_space ? res += ' ' : res += '#';
                res += ' ';
            } else {
                //is_space ? res += '#' : res += ' ';
                res += '#';
            }
            //is_space = !is_space;
            column++;
        } else {
            res += '\n';
            column = 0;
            row++;
        }
    }*/

    console.log(res);

    // Book solution
    let size_ = size;

    let board = "";

    for (let y = 0; y < size_; y++) {
        for (let x = 0; x < size_; x++) {
            if ((x + y) % 2 == 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }

    console.log(board);
}

chessboard(9);