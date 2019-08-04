// Consider an array of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).

// For example,

//     [true, true, true, false,
//         true, true, true, true,
//         true, false, true, false,
//         true, false, false, true,
//         true, true, true, true,
//         false, false, true, true]

function countSheeps(arrayOfSheep) {
    let total = arrayOfSheep.length
    for (let boolean of arrayOfSheep) {
        if (boolean === !true || boolean === null || boolean === undefined) {
            total = total - 1
        }
    }
    return total
}

