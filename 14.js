//Q.14 How do you count the occurrence of a given character in a string?

function countString(str, letter) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}
console.log(countString("helloooooo","o"));