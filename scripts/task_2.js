function isPrime(num) {
    let isPrime = true;
    if (num > 1000 || num < 0) {
        console.log("Number is incorrect")
    } else if (num === 0 || num === 1) {
        console.log("Number is neither prime nor composite number");
    } else if (num > 1) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            console.log(`Prime number`);
        } else {
            console.log(`Not prime number`);
        }
    }
    else {
        console.log("The number is not a prime number");
    }
}

isPrime(-5);
isPrime(1);
isPrime(5);
isPrime(13);
isPrime(1300);
isPrime('string');

