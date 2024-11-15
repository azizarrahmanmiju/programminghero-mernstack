function fizzBuzzTwist() {
    const result = [];

    for (let i = 1; i <= 100; i++) {
        let output = '';

        // Check for divisibility and digit inclusion
        const hasThree = i.toString().includes('3');
        const hasFive = i.toString().includes('5');
        const divisibleByThree = i % 3 === 0;
        const divisibleByFive = i % 5 === 0;

        // Determine output based on conditions
        if ((divisibleByThree && divisibleByFive) || (hasThree && hasFive)) {
            output = 'FizzBuzz';
        } else if (divisibleByThree || hasThree) {
            output = 'Fizz';
        } else if (divisibleByFive || hasFive) {
            output = 'Buzz';
        } else {
            output = i;
        }

        result.push(output);
    }

    return result;
}

console.log(fizzBuzzTwist());


// thamks to reach me
