const joinNames = (namesObj) => {
  const nameArray = namesObj.map((item) => item.name);
  if (nameArray.length <= 1) {
    return nameArray.join("");
  } else {
    const lastName = nameArray.pop();
    return nameArray.join(", ") + " & " + lastName;
  }
};

module.exports = joinNames;
