const additivePersistence = (n, count = 0) => {
    const digits = n.toString().split("").map(d => Number(d));

    return digits.length <= 1
        ? count
        : additivePersistence(digits.reduce((sum, num) => sum += num, 0), count++)
}

console.log(additivePersistence(199));
