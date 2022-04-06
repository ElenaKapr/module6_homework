function funcOne (num1, num2) {
    let current = num1;

    let timerId = setInterval (function() {
        console.log(current);
        if (current == num2) {
            clearInterval (timerId);
        }
        current++;
    }, 1000);
}

funcOne (5, 15);
