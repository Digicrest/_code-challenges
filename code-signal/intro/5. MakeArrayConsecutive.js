/*
    Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, 
    each statue having an non-negative integer size. 

    Since he likes to make things perfect, he wants to arrange them from smallest to largest 
    so that each statue will be bigger than the previous one exactly by 1. 

    He may need some additional statues to be able to accomplish that. 
    Help him figure out the minimum number of additional statues needed.

    E.g. 
        makeArrayConsecutive2([6, 2, 3, 8]) = 3.
        Ratiorg needs statues of sizes 4, 5 and 7.
*/

function makeArrayConsecutive2(statues) {
    let sorted = statues.sort((a, b) => a > b);
    let missing = [];
    
    for(let i = sorted[0]; i <= sorted[sorted.length - 1]; i++){
        if(sorted.includes(i)) continue;
        missing.push(i);
    }
    
    return missing.length;
}