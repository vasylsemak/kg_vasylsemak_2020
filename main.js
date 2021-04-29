const converter = require('number-to-words')  /* npm package */
const commandLineArgs = process.argv.slice(2)

// Split every number into digits array
// Convert digits to strings using toWords() method
// Upper case every first letter of the string
// Join every string DIGIT of inner array with no space
// Join every string NUMBER into String of Numbers

const integersToStrings = args => [...args]
  .map(num => num
    .split('')
    .map(digit => {
      let digitStr = converter.toWords(digit)
      return digitStr[0].toUpperCase() + digitStr.slice(1)
    })
    .join('')
  )
  .join(', ')

console.log(
  integersToStrings(commandLineArgs)
)
