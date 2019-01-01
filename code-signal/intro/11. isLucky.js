/*
    Ticket numbers usually consist of an even number of digits. 
    
    A ticket number is considered lucky if the sum of the first half 
    of the digits is equal to the sum of the second half.

    Given a ticket number n, determine if it's lucky or not.

    e.g:        
        For n = 1230, the output should be
        isLucky(n) = true;

        For n = 239017, the output should be
        isLucky(n) = false.
*/

function isLucky(n) {
    const nArr = n.toString().split("").map(Number)
    const arr = nArr.splice(0, Math.floor(nArr.length / 2))
    
    const first_half_sum = nArr.reduce((sum, n) => sum += n, 0)
    const other_half_sum = arr.reduce((sum, n) => sum += n, 0)
    
    return first_half_sum === other_half_sum;  
}