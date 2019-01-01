/*
    After they became famous, the CodeBots all decided to move to a new building and live together. 
    
    The building is represented by a rectangular matrix of rooms. 
    
    Each cell in the matrix contains an integer that represents the price of the room. 
    
    Some rooms are free (their cost is 0), but that's probably because they are haunted, 
    so all the bots are afraid of them. 
    
    That is why any room that is free or is located anywhere below a free room in the 
    same column is not considered suitable for the bots to live in.

    Help the bots calculate the total price of all the rooms that are suitable for them.

    E.g.
        matrix = [
            [0, 1, 1, 2], 
            [0, 5, 0, 0], 
            [2, 0, 3, 3]
        ]

    the output should be
    matrixElementsSum(matrix) = 9.

    Here's the rooms matrix with unsuitable rooms marked with 'x':

    [
        [x, 1, 1, 2], 
        [x, 5, x, x], 
        [x, x, x, x]
    ]

    Thus, the answer is 1 + 5 + 1 + 2 = 9.
*/

function matrixElementsSum(matrix) {
    let new_matrix = [];
    
    // matrix transformation, turns the rows into columns
    for(let i = 0; i < matrix[0].length; i++){
        let sub_arr = [];
        for(let j = 0; j < matrix.length; j++){
            sub_arr.push(matrix[j][i]);
        }
        new_matrix.push(sub_arr)
    }
    
    return new_matrix.map(sub_arr => {
        let sum = 0;
        for(let i = 0; i < sub_arr.length; i++){
            let val = sub_arr[i];
            if (val === 0) break;
            sum += val;
        }
        return sum;
    }).reduce((total, price) => total += price, 0);
}
