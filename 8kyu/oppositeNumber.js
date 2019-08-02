// Very simple, given a number, find its opposite.

//     Examples:

// 1: -1
// 14: -14
//     - 34: 34

function opposite(number) {
    return number > 0 ? parseFloat('-' + number) : number * -1

}