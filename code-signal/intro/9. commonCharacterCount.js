/*
    Given two strings, find the number of common characters between them.

    E.g.
        commonCharacterCount("aabcc", "adcaa") = 3.

    Strings have 3 common characters - 2 "a"s and 1 "c".
*/


function commonCharacterCount(s1, s2) { 
    let s1Bigger = s1.length > s2.length;
    let shorter = (s1Bigger ? s2 : s1).split("");
    let bigger =  (s1Bigger ? s1 : s2).split("");
    
    for(let i = 0; i < shorter.length; i++){
        const letter = shorter[i];
        
        if(bigger.includes(letter)){ 
            bigger.splice(bigger.indexOf(letter), 1)
            shorter.splice(i, 1);
            i--;
        }
    }
    
    return s1Bigger ? s1.length - bigger.length: s2.length - bigger.length;
}
