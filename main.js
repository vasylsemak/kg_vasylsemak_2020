const converter = require('number-to-words'); /* npm package */
const commandLineArgs = process.argv.slice(2);

// Split every number into digits array
// Convert digits to strings using toWords() method
// Upper case every first letter of the string
// Join every string DIGIT of inner array with no space
// Join every string NUMBER into String of Numbers

function integersToStrings(args) {
  const numbersArray = [...args];

  const numberStringsArr = numbersArray.map(num => {
    const digitStringsArr = num.split('').map(digit => {
      const digitWorld = converter.toWords(digit);

      return digitWorld[0].toUpperCase() + digitWorld.slice(1);
    });

    return digitStringsArr.join('');
  })
  const numbersString = numberStringsArr.join(', ');
  console.log(numbersString);

  return numbersString;
}

integersToStrings(commandLineArgs);
