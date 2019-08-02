// Convert number to reversed array of digits
// Given a random number:

// C#: long;
// C++: unsigned long;
// You have to return the digits of this number within an array in reverse order.

//Example:
// 348597 => [7, 9, 5, 8, 4, 3]

function digitize(n) {
    //declare array
    var arr = [];
    //if n is number
    if (typeof n === 'number') {
        //make n string
        var str = n.toString();
        //push digits from end to front to new array
        for (var i = str.length - 1; i >= 0; i--) {
            arr.push(str[i]);


        }
    }
    //parse each string back to a number in the array
    return arr.map((e) => parseInt(e));
}
