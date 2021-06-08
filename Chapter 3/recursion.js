function isEven(num) {
    // My solution
    if (num < 0) return false;

    if (num === 0)
        return true;
    else if (num === 1)
        return false;

    return isEven(num % 2);

    //Book solution

    if (num == 0) return true;
    else if (num == 1) return false;
    else if (num < 0) return isEven(-num);
    else return isEven(num - 2);
}

console.log(isEven(15012));