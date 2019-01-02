const fizzBuzz = n => {
    let msg = '';
    
    if (n % 3 === 0) msg += 'Fizz';
    if (n % 5 === 0) msg += 'Buzz';

    return msg ? `${n}: ${msg}` : "";
}

// Output
for (let i = 1; i < 100; i++) {
    const result = fizzBuzz(i);
    if (result) console.log(result) 
}