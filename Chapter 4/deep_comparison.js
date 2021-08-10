// My solution (TO DO)
function deepEqual(value1, value2) {
    console.log(value1)
    if (value1 === undefined || value1 === null || value2 === undefined || value2 === null) return false;
    if (value1 === value2) return true;

    Object.keys(value1).forEach(key => {
        console.log(key)
        console.log(typeof key)
    })
}

const obj1 = {
    a: 'a',
    b: 'b'
}

const obj2 = {
    a: 'a',
    b: 'b'
}

console.log(deepEqual(obj1, obj2));

// Book solution

function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}