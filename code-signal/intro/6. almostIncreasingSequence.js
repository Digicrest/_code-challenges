/*
    Given a sequence of integers as an array, determine whether it is possible 
    to obtain a strictly increasing sequence by removing no more than one element from the array.

    E.g.
        almostIncreasingSequence([1, 3, 2, 1]) = false.
        There is no one element in this array that can be removed in order to get a strictly increasing sequence.

        almostIncreasingSequence([1, 3, 2]) = true.
        You can remove 3 from the array to get the strictly increasing sequence [1, 2]. 
        Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].
*/

let count = 0;

function almostIncreasingSequence(arr) {
    if(count === 2) return false;
    
    for(let i = 0; i < arr.length; i++){
        if (arr[i] >= arr[i + 1]) {
            if(!arr[i+2] || arr[i+2] > arr[i])
                arr.splice(i+1, 1);     
            else 
                arr.splice(i, 1);

            count++;
            almostIncreasingSequence(arr);
            break;
        }        
    }   
    return count <= 1;screenLeft
}