function primeNumber (num) {
    if (num <= 1 || num > 1000) {
        console.log (`Данные не верны: num = ${num}`);
    } else {
        let flag = true;
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                flag = false;
                break;
            }
        }
        if (flag === true) {
            console.log(`Число ${num} - простое число`);
        } else {
            console.log(`Число ${num} - не простое число`);
        }
    }
}

let numInput = +prompt ("Введите число");
if (typeof(numInput) === "number" && isNaN (numInput) === false) {
    primeNumber (numInput);
}