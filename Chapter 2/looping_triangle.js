function create_triangle() {
    // My solution
    for (let i = 1; i < 8; i++) {
        console.log('#'.repeat(i));
    }

    // Book solution
    for (let line = '#'; line.length < 8; line += '#')
        console.log(line);
}

create_triangle();