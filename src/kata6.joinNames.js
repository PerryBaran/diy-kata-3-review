const joinNames = (namesObj) => {
	if (namesObj.length === 0) return '';
	const names = namesObj.map((name) => name.name);
	const lastName = names.pop();
	console.log(names, lastName);
	return names.length > 0 ? `${names.join(', ')} & ${lastName}` : `${lastName}`;
};

module.exports = joinNames;

// let string = '';
// if (namesObj.length === 0) {
// 	return string;
// } else {
// 	string += namesObj[0].name;
// }
// for (let i = 1; i < namesObj.length; i++) {
// 	if (namesObj.length === 1) break;
// 	if (i !== namesObj.length - 1) {
// 		string += `, ${namesObj[i].name}`;
// 	} else {
// 		string += ` & ${namesObj[i].name}`;
// 	}
// }
// console.log(string);
// return string;
