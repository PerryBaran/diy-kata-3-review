// need an empty array and a number section. When a number is 
// added into number function 3 numbers should be in the Array

// if the number is 1 should return 15, if 2 should return 24,
// if more should return in incruments of 4 & 5

//     const years = [];
//     for (let i = 0; i < 3; i++){
//     if (number === 1){
//         years.push (15);
//     } 
//     else if (number === 2){
//         years.push (24);
//     } 
//     else if (number => 3){
//         years.push (24 + (number - 2)* 4, 24 + (number - 2) * 5);
//     }
//   }

//   return years;
// };

const humanCatDogYears = (number) => {
    if (number === 1) {
      return [number, 15, 15];
    } 
    if (number === 2) {
      return [number, 24, 24];
    } 
    if (number >= 3) {
      return [number, 24 + (number - 2) * 4, 24 + (number - 2) * 5];
    }
  };

module.exports = humanCatDogYears;
