// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
    let arr = []
    arr = arr.concat(array);
    arr.sort(function (a, b) { return a - b });
    arr = arr.join('');

    let arr2 = []
    arr2 = arr2.concat(array);
    arr2.sort(function (a, b) { return b - a });
    arr2 = arr2.join('');

    array = array.join('');

    if (arr === array) {
        return 'yes, ascending'
    } else if (arr2 === array) {
        return 'yes, descending'
    }

    return 'no'
}