function funcOne (num1) {
    return function (num2) {
        return num1 + num2;
    }
}

const result = funcOne (2);

console.log (result(3));