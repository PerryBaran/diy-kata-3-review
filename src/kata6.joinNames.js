const joinNames = (namesObj) => {
  let string = "";
  for (let i = 0; i < namesObj.length; i++) {
    if (i === namesObj.length - 2) {
      string += `${namesObj[i].name} & ${namesObj[i + 1].name}`;
      break;
    }
    string += `${namesObj[i].name}, `;
  }
  return string;
};

module.exports = joinNames;
