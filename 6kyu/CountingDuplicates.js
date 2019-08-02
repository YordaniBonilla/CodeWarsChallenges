Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

function duplicateCount(text) {
    //make all chars lowercase
    //split chars into an array
    var arr = text.toLowerCase().split('');
    //iterate each element
    //use indexOf to check index of iteratee 
    //since index of always returns the first index of given element
    //if it is a value that has been previously found it will evaluate
    //to the first index of that element
    //thus if the index of that value at the time is not the current index
    //the expression is evaluated to false 
    //thus not reassigned to newArr
    var newArr = arr.filter((a, b) => {
        return arr.indexOf(a) != b;
    });
    //newArr should now be made up of all the values that were evaluated to true

    //again we iterate each element at newArr
    return newArr.filter((item, pos) => {
        //if the current element being iterated is a repeat its index will be that 
        //of the first of the same found
        //thus when comparing the element to the current index 
        //and if it results to true it will be added to newArr
        return newArr.indexOf(item) == pos;
        //if the indexes dont match up it results to false thus not getting added to 
        //newArr

    }).length;
    //finaly after everything gets evaluated and since when you return something 
    //its only a return thus its not saved anywhere
    //we use .length to return the final result of our evaluation 
    //the return should be the length of how many times each distinct
    //case insensitive alphabetic character or numeric digit appears in a given input
};