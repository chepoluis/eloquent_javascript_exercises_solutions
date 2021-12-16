let map = {
    one: true,
    two: true,
    hasOwnProperty: ':D'
}

// To be able to call the method hasOwnProperty, you need to do the following
console.log(Object.prototype.hasOwnProperty.call(map, 'one'));





// Object.prototype.hasOwnProperty = true;