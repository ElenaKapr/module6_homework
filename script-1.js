function contentArray () {
    let arr = [5, 14, 0, 25, null, "dfzds", 32, 56, 35, "", NaN, 0, 28];
    let nEven = 0;
    let nOdd = 0;
    let nZero = 0;

    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) === "number" && isNaN (arr[i]) === false) {
            if (arr[i] === 0) {
                nZero++;
            } else if (arr[i] % 2 === 0) {
                nEven++;
            } else {
                nOdd++;
            }
        }
    }

    console.log(`Количество нулевых элементов: ${nZero}; Четных чисел: ${nEven}; Нечетных чисел: ${nOdd}`);
}

contentArray();