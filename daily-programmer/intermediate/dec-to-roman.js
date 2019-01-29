let roman_letters = [
    { char: "I", value: 1 },
    { char: "V", value: 5 },
    { char: "X", value: 10 },
    { char: "L", value: 50 },
    { char: "C", value: 100 },
    { char: "D", value: 500 },
    { char: "M", value: 1000 }
];

function convertToRoman(num) {
    let positions = num.toString().split("")
        .map(n => Number(n)).reverse();
    let solutions = [];

    let count = 0;
    positions.map(pos => {
        solutions.push(individualConvert(positions[count], Math.pow(10, count)));
        count++;
    })

    return solutions.reverse().join("");
}

document.getElementsByClassName(".bit").forEach(el => el.addClic)
function individualConvert(n, place_value){
    let true_n = n * place_value;
    let converted = true_n;
    let solution = [];

    if(n === 4 || n === 9){
        let step_back = n === 9 ? 2 : 1;
        let parent = roman_letters.find(rome => rome.value - true_n > 0);
        return roman_letters[roman_letters.indexOf(parent) - step_back].char + parent.char; 
    } 
    
    roman_letters.reverse().reduce((acc, item) => {
        while(converted > 0) {
            if(converted - item.value >= 0){
                converted -= item.value;
                solution.push(item.char);
            }
        }
    }, 0);

    let solve = solution.join("");
    return solve;
}


let nums = [2, 3, 4, 5, 9, 12, 16, 29, 44, 68, 83, 97, 99, 400, 500, 501, 649, 798, 891, 1000, 1004, 1006, 1023, 2014, 3999];

let testIt = n => {
    if(n === 2)     return "II";
    if(n === 3)     return "III";
    if(n === 4)     return "IV";
    if(n === 5)     return "V";
    if(n === 9)     return "IX";
    if(n === 12)    return "XII";
    if(n === 16)    return "XVI";
    if(n === 29)    return "XXIX";
    if(n === 44)    return "XLIV";
    if(n === 45)    return "XLV";
    if(n === 68)    return "LXVIII";
    if(n === 83)    return "LXXXIII";
    if(n === 97)    return "XCVII";
    if(n === 99)    return "XCIX";
    if(n === 400)   return "CD";
    if(n === 500)   return "D";
    if(n === 501)   return "DI";
    if(n === 649)   return "DCXLIX";
    if(n === 798)   return "DCCXCVIII";
    if(n === 891)   return "DCCCXCI";
    if(n === 1000)  return "M";
    if(n === 1004)  return "MIV";
    if(n === 1006)  return "MVI";
    if(n === 1023)  return "MXXIII";
    if(n === 2014)  return "MMXIV";
    if(n === 3999)  return "MMMCMXCIX";
}

nums.map(n => {
    let expected = testIt(n);
    let actual = convertToRoman(n);

    console.log(expected === actual ? "" : `${n} Failed with ${actual}, it wanted ${expected}`);
});