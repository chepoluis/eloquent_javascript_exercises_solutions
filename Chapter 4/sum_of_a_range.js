// My Solution

function range(start, end, step) {
    let result = [];

    if (step < 0) {
        for (let i = start; i >= end; i += step)
            result.push(i);
    } else {
        for (let i = start; i <= end; step ? i += step : i++)
            result.push(i);
    }

    console.log(result)
    return result;
}

function sum(numbersArray) {
    const result = numbersArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
    })

    return result;
}

// Book Solution

function range(start, end, step = start < end ? 1 : -1) {
    let array = [];

    if (step > 0) {
        for (let i = start; i <= end; i += step) array.push(i);
    } else {
        for (let i = start; i >= end; i += step) array.push(i);
    }
    return array;
}

function sum(array) {
    let total = 0;
    for (let value of array) {
        total += value;
    }
    return total;
}


console.log(sum(range(1, 10, 2)));