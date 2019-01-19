/*
    Write a function that reverses characters in (possibly nested) parentheses in the input string.

    Input strings will always be well-formed with matching ()s.

    For inputString = "foo(bar(baz))blim", the output should be
    reverseInParentheses(inputString) = "foobazrabblim".

    Because "foo(bar(baz))blim" becomes "foo(barzab)blim" and then "foobazrabblim".
*/

function reverseInParentheses(inputString) {
    return inputString.includes('(')
        ? reverseInParentheses(reverseOnce(inputString))
        : inputString
}

function reverseOnce(iStr) {
    let re = /\(([^()]*)\)/i;
    return iStr.replace(re, re.exec(iStr)[1].split('').reverse().join(''))
}
