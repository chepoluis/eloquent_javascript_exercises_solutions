// My solution
function flattening(array) {
    return array.reduce((previous, current) => previous.concat(current), [])
}

// Book solution
console.log(arrays.reduce((flat, current) => flat.concat(current), []));

console.log(flattening([['a'], ['b'], ['c', 'd']]))