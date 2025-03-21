function countLetters(str) {
    let letterCount = new Map();

    for (let letter of str) {
        letterCount.set(letter, (letterCount.get(letter) || 0) + 1);
    }

    return letterCount;
}

console.log(countLetters("banana"));
