// JS studies from developer.mozilla.org

// Method .startsWith()
// lets you determine whether or not a string begins determined string
// this method is case-sensitive
// str.startsWith(searchString[, position])

let str = 'To be, or not to be, that is the question.'

console.log(str.startsWith('To be'))          // true
console.log(str.startsWith('not to be'))      // false
console.log(str.startsWith('not to be', 10))  // true

// ------------------------------------------------------------------

// Method substring()
// extracts characters from indexStart up to but not including indexEnd
// str.substring(indexStart[, indexEnd])
//
// If indexStart is greater than indexEnd, then the effect 
// [ of substring() is as if the two arguments were swapped.
//
// Any argument value that is less than 0 or greater than stringName.length 
// [ is treated as if it were 0 and stringName.length, respectively.

let anyString = 'Mozilla'

// Displays 'M'
console.log(anyString.substring(0, 1))
console.log(anyString.substring(1, 0))

// Displays 'Mozill'
console.log(anyString.substring(0, 6))

// Displays 'lla'
console.log(anyString.substring(4))
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Displays 'Mozilla'
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))

// Displays 'illa' the last 4 characters
let anyString = 'Mozilla'
let anyString4 = anyString.substring(anyString.length - 4)
console.log(anyString4)

// Displays 'zilla' the last 5 characters
let anyString = 'Mozilla'
let anyString5 = anyString.substring(anyString.length - 5)
console.log(anyString5)

// ------------------------------------------------------------------

// The slice() method returns an empty string if
// [ indexStart is greater than indexEnd.
//
// When it is given negative values it counts backwards
// [ from the end of the string to find the indexes.

let text = 'Mozilla'
console.log(text.substring(5, 2))  // => "zil"
console.log(text.slice(5, 2))      // => ""

console.log(text.slice(-5, 2))   // => ""
console.log(text.slice(-5, -2))  // => "zil"

// ------------------------------------------------------------------

// Method .replace()
// returns a new string with some or all matches
// [ of a pattern replaced by a replacement
// const newStr = str.replace(regexp|substr, newSubstr|function)

const p = 'The quick brown fox jumps over the lazy dog. \
            If the dog reacted, was it really lazy?';

console.log(p.replace('dog', 'monkey'));

const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));

// ------------------------------------------------------------------

// String property .lenght:
const str = 'Life, the universe and everything. Answer:';
console.log(`${str} ${str.length}`);
// "Life, the universe and everything. Answer: 42"

// ------------------------------------------------------------------

//.value
//style.background
//getElementById
//addEventListener