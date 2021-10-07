// My solution
function yourOwnLoop(value, test, update, body) {
    // Test
    if (!test(value)) return false

    // Body
    body(value)

    // Update
    value = update(value)

    yourOwnLoop(value, test, update, body)
}

yourOwnLoop(3, n => n > 0, n => n - 1, console.log)

// Book solution
function loop(start, test, update, body) {
    for (let value = start; test(value); value = update(value)) {
      body(value);
    }
}

loop(3, n => n > 0, n => n - 1, console.log);