let arr = [11, 63, 49, false, 77, 0, null, 0, 36, undefined, 'Tokyo', 0, 78, true, 24, null, 99, 24];
let countEven = 0;
let countOdd = 0;
let countZero = 0;
let countSign = 0;

function count() {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] == "string" || arr[i] === undefined || arr[i] == null || arr[i] === false || arr[i] === true) {
            countSign++;
        } else if (arr[i] === 0) {
            countZero++;
        } else if (arr[i] % 2 === 0) {
            countEven++;
        } else {
            countOdd++;
        }
    }

    console.log('Count of even numbers: ' + countEven);
    console.log('Count of odd numbers: ' + countOdd);
    console.log('Count of signs: ' + countSign);
    console.log('Count of zeros: ' + countZero);
}

count();
