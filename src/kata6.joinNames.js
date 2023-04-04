const joinNames = (namesObj) => {
  const namesArr = namesObj.map(({ name }) => name);
  const lastName = namesArr.pop();
  return `${namesArr.join(", ")} & ${lastName}`;
};

module.exports = joinNames;
