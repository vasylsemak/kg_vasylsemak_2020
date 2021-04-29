const converter = require('number-to-words'); /* npm package */
const commandLineArgs = process.argv.slice(2);
// let x = converter.toWords(13);

function integersToStrings(args) {
  const numbersArray = [...args];

  return numbersArray.map(num => {
    // Convert every number to digits array
    const digitsArr = num.split('').map(digit => converter.toWords(digit))
    console.log('NUM ->', digitsArr)
  })

}

integersToStrings(commandLineArgs);
