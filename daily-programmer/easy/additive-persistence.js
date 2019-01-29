let counter = 0;

const additivePersistence = n => {
    const digits = n.toString().split("").map(d => Number(d));

    if (digits.length <= 1) return counter;
    counter++;
    return additivePersistence(digits.reduce((sum, num) => sum += num, 0))
}

console.log(additivePersistence(199));
