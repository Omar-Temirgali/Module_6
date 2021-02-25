function print(n, m) {
    const intervalId = setInterval(function () {
        console.log(n);
        if (n + 1 > m) {
            clearInterval(intervalId);
        }
        n++;
    }, 1000);
}

print(5, 15);
