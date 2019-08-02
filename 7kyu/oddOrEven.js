// Task:
// Given an array of numbers (a list in groovy), determine whether the sum of all of the numbers is odd or even.

// Give your answer in string format as 'odd' or 'even'.

// If the input array is empty consider it as: [0] (array with a zero).

// Example:
// oddOrEven([0]) returns "even"
// oddOrEven([2, 5, 34, 6]) returns "odd"
// oddOrEven([0, -1, -5]) returns "even"

//input array of numbers
//output boolean
//constraints 
//edge cases if array is empty has a 0 or a 1 

function oddOrEven(array) {
    let sum = 0;
    //iterate array
    array.forEach(element => sum += element)
    //sum all elements
    //use modulo to determin if odd or even
    if (sum % 2 === 0) {
        return 'even'
    } else {
        return 'odd'
    }
    //check if odd or even
    //return output
}