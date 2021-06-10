// My solution
function countsBs(word, letterCounted = 'B') {
    const res = word.split('').filter(letter => letter === letterCounted);

    return res.length;
}

console.log('Result: ', countsBs('AAsdaBsdBbBaaaBbB', 'A'));

// Book solution
function countChar(string, ch) {
    let counted = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == ch) {
            counted += 1;
        }
    }
    return counted;
}

function countBs(string) {
    return countChar(string, "B");
}
