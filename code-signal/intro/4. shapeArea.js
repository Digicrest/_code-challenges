/*
    Below we will define an n-interesting polygon. 
    
    Your task is to find the area of a polygon for a given n.

    A 1-interesting polygon is just a square with a side of length 1. 
    An n-interesting polygon is obtained by taking the n - 1-interesting polygon 
    and appending 1-interesting polygons to its rim, side by side. 
    
    E.g. 
        shapeArea(2) = 5;
        shapeArea(3) = 13;
*/

const shapeArea = n => Math.pow(n, 2) + Math.pow(n - 1, 2)


// 1, 1 | 2, 5 | 3, 12 | 4, 25
// 
// 1 = sides 4,  1  (1)
// 2 = sides 8,  5  (2 * 2 + 1)
// 3 = sides 12, 13 (3 * 3 + 4)
// 4 = sides 16, 25 (4 * 4 + 9)