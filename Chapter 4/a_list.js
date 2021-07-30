// My solution (TO DO)
function arrayToList(array) {
    let list = null;

    for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        console.log(list)
        list = {
            value: element,
            rest: list
        }
    }

    return list;
}

const res = arrayToList([1, 2, 3, 4, 5]);

function listToArray(list) {
    console.log(list)
    let flag = true;
    let array = [];

    do {
        if (list.rest === null)
            flag = false;

        array.push(list.value);
        list = list.rest;
        console.log(list)
    } while (flag);

    console.log(array)
}

listToArray(res);

// Book solution
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
        list = { value: array[i], rest: list };
    }
    return list;
}

function listToArray(list) {
    let array = [];
    for (let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(value, list) {
    return { value, rest: list };
}

function nth(list, n) {
    if (!list) return undefined;
    else if (n == 0) return list.value;
    else return nth(list.rest, n - 1);
}