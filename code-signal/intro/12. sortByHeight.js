/*
    Some people are standing in a row in a park. 
    
    There are trees between them which cannot be moved. 
    
    Your task is to rearrange the people by their heights in a 
    non-descending order without moving the trees. 
    
    People can be very tall!

    e.g:
        For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
        sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].
*/

function sortByHeight(a) {
    let tree_pos = a
        .map((val, ind) => val === -1 ? ind : undefined)
        .filter(n => n !== undefined);
    
    let people = a
        .filter(tree => tree !== -1)
        .sort((a, b) => a - b);
 
    return new Array(a.length).fill(0).map((val, i) => 
        tree_pos.includes(i) ? -1 : people.shift()
    )
}
