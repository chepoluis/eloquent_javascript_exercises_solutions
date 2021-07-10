// My Solution
function reverseArray(array) {
    let newArray = [];

    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];

        newArray.push(element);
    }

    return newArray;
}

function reverseArrayInPlace(array) {
    let cont = array.length - 1;

    for (let i = 0; i < array.length / 2; i++) {
        let temp = array[i];

        array[i] = array[cont];
        array[cont] = temp;

        cont--;
    }

    return array;
}

//console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6, 7]));

// Book Solution
function reverseArray(array) {
    let output = [];
    for (let i = array.length - 1; i >= 0; i--) {
        output.push(array[i]);
    }
    return output;
}

function reverseArrayInPlace(array) {
    for (let i = 0; i < Math.floor(array.length / 2); i++) {
        let old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}
