function minimum(num1, num2) {
    // My solution
    return num1 < num2 ? num1 : num2;

    // Book solution
    if (num1 < num2) return num1;
    else return num2;
}

console.log(minimum(-2,5));