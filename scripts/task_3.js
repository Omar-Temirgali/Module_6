function sum(n) {
    return function (m) {
        return n + m;
    }
}

const result = sum(25);
console.log(result(32));