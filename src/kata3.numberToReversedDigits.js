const numberToReversedDigits = (number) => {
    // const digits = [];

    // const addToArray = (number,digits) => {
    // digits.push(number);
    // };

    // return digits

    // digits.join(',');

        // const arr = [];
        // arr.push(number);
        // arr.join(',');
        // arr.reverse();
      
// };

// const numberToReversedDigits = (number) => {
//     const arr = [];
//     arr.push(number);
//     arr.join(',');

// const arr = [];
// for (let i = 0; i < number.length; i++) {
//   arr.push(number[i]);
// }
// return arr.reverse().join(',');
// };

    const digits = [];
    while (number) {
      digits.push(number % 10);
      number = Math.floor(number / 10);
    }
    return digits;
  };


module.exports = numberToReversedDigits;