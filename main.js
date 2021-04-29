const converter = require('number-to-words'); /* npm package */
const commandLineArgs = process.argv.slice(2);

// Split every number into digits array
// Convert digits to strings using toWords() method
// Upper case every first letter of the string
// Join every string DIGIT of inner array with empty space

function integersToStrings(args) {
  const numbersArray = [...args];

  const numbersStr = numbersArray.map(num => {
    const stringsArr = num.split('').map(digit => {
      const digitWorld = converter.toWords(digit);

      return digitWorld[0].toUpperCase() + digitWorld.slice(1);
    });

    return stringsArr.join('');
  })

  console.log('NumsStr ->', numbersStr);
}

integersToStrings(commandLineArgs);
