// This time no story, no theory.The examples below show you how to write function accum:

//     Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"


function accum(k) {
let key = []
let s = k.split("")
for(let i = 0; i < s.length; i++) {
  if(s.indexOf(i)) {
  key.push(s[i].toUpperCase())
  key.push(s[i].toLowerCase().repeat(i) + "-")
}
}
let newKey = key.join("")
return newKey.substr(0,newKey.length-1)
}