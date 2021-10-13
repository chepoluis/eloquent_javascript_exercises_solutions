// My solution - To do https://stackoverflow.com/questions/66199733/how-does-this-code-from-eloquent-js-determine-the-dominant-writing-direction

// Book solution

function dominantDirection(text) {
    let counted = countBy(text, char => {
        let script = characterScript(char.codePointAt(0));
        return script ? script.direction : "none";
    }).filter(({ name }) => name != "none");

    if (counted.length == 0) return "ltr";

    return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

console.log(dominantDirection("Hello!"));