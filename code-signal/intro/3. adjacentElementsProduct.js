/*
    Given an array of integers, find the pair of adjacent elements that has 
    the largest product and return that product.

    E.g. For inputArray = [3, 6, -2, -5, 7, 3], the output should be 
    adjacentElementsProduct(inputArray) = 21.

    7 and 3 produce the largest product.
*/

const adjacentElementsProduct = inputArray => 
    inputArray.reduce((largest_product, value, i) => {
        let product = value * inputArray[i + 1];
        
        return product > largest_product ? product : largest_product
    }, inputArray[0] * inputArray[1])
