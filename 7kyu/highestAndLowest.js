// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//     Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.






//solution 1
function highAndLow(numbers) {
    let inOrder = numbers.split(" ").sort((a, b) => a - b)
    let highNLow = []
    highNLow.push(inOrder[inOrder.length - 1])
    highNLow.push(inOrder[0])
    console.log(highNLow)

    return highNLow.join(" ")
}

//solution 2

function highAndLow(numbers) {
    var toArr = numbers.split(" ").map(e => parseInt(e));
    return `${Math.max(...toArr)} ${Math.min(...toArr)}`;
}