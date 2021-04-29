const converter = require('number-to-words')  /* npm package */
const commandLineArgs = process.argv.slice(2)

const integersToStrings = args => [...args]
  .map(num => num
    .split('')
    .map(digit => {
      const digitStr = converter.toWords(digit)
      return digitStr[0].toUpperCase() + digitStr.slice(1)
    })
    .join('')
  )
  .join(', ')

console.log(
  integersToStrings(commandLineArgs)
)
