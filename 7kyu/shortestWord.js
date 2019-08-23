// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.





function findShort(s) {
    let string = s.split(" ")
    let max = string[0]

    string.forEach(e => {
        if (e.length < max.length) {
            max = e
        }
    })
    return max.length
}