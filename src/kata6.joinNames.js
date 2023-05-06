const joinNames = (namesObj) => {
  let concatenatedNames = "";
  for (let i = 0; i < namesObj.length; i++) {
    if (i === namesObj.length - 1) {
      concatenatedNames += " & " + namesObj[i].name;
    } else if ( i === namesObj.length - 2) {
      concatenatedNames += namesObj[i].name;
    } else {
      concatenatedNames += namesObj[i].name + ', ';
    }
  }
  return concatenatedNames;
}

module.exports = joinNames;
