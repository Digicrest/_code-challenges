/*
    Given an array a that contains only numbers in the range from 1 to a.length, 
    find the first duplicate number for which the second occurrence has the minimal index. 
    
    In other words, if there are more than 1 duplicated numbers, return the number for which
    the second occurrence has a smaller index than the second occurrence of the other number does. 
    
    If there are no such elements, return -1.  

    E.g. 
        firstDuplicate([2, 1, 3, 5, 3, 2]) = 3.

        There are 2 duplicates: numbers 2 and 3. 
        The second occurrence of 3 has a smaller index than the second occurrence of 2 does, so the answer is 3.

        firstDuplicate([2, 4, 3, 5, 1]) = -1.
*/


// SOLUTION #1: Runtime complexity was too poor so it was failing on time
function firstDuplicate(a) {
    let new_arr = [];

    for(let i = 0; i < a.length; i++){
        if(new_arr.includes(a[i])) return a[i];
        new_arr.push(a[i]);
    }
    
    return -1;
}

// O(n) Solution passed
function firstDuplicate(a) {
    let mapped = {};

    for(let i = 0; i < a.length; i++){
        if(!mapped[a[i]]) mapped[a[i]] = a[i];
        else return a[i];
    }
    
    return -1;
}