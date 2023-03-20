// needs to return a string of names, concat and seperated by a ,
// when given an array of Objects, turn into a string.
// array of objects needs to be for any amount of names

//need to convert array of objects to string
//then seperate with, 
// create last name in string as a variable and put '&' 
// between last names

// const joinNames = (namesObj) => {
//     const string = namesObj.name.split(",");
// };

const joinNames = (namesObj) => {
    let string = '';
    for (let i = 0; i < namesObj.length; i++) {
      if (i === namesObj.length - 2) {
        string += namesObj[i].name + ' & ' + namesObj[i+1].name;
        break;
      }
      string += namesObj[i].name + ', ';
    }
    return string;
  };

module.exports = joinNames;
