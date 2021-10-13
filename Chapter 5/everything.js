// My Solution
function everything(array, predicate) {
    //for (let i = 0; i < array.length; i++)
    for (let element of array)
        if (!predicate(element)) return false

    return true
}

function everythingWithSome(array, predicate) {
    return array.some(predicate)
}

// everything
console.log(everything([1, 2, 3, 4, 5], p => p < 50))

// everythingWithSome
console.log(everythingWithSome([12, 22, 32, 42, 5], p => p < 10))

// Book solution
function every(array, predicate) {
    for (let element of array) {
        if (!predicate(element)) return false;
    }
    return true;
}

function every2(array, predicate) {
    return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));