// 2D array = multi-dimensional array that stores a matrix
//                    of data in rows and columns.
//                    Useful for games, spreadsheets, or representing images 

const matrix2 = [ [1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9],
                 ['*', 0, '#']];

const matrix1 = [ [1, 2, 3],
                 [4, 5, 6],
                 [7, 8, 9]];                 

matrix1[0][0] = 'X';
matrix1[0][1] = 'O';
matrix1[0][2] = 'X';

matrix1[1][0] = 'O';
matrix1[1][1] = 'X';
matrix1[1][2] = 'O';

matrix1[2][0] = 'X';
matrix1[2][1] = 'O';
matrix1[2][2] = 'X';


for(let row of matrix1){
    const rowString = row.join(' ');
    console.log(rowString);
}

console.log("");

for(let row of matrix2){
    const rowString = row.join(' ');
    console.log(rowString);
}