const booleanToWord = (boolean) => {
  if (boolean === true) {
    return "yes";
  }

  if (boolean === false) {
    return "No";
  }
};

module.exports = booleanToWord;
