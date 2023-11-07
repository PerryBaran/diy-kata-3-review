const getEmployerRole = (employeeName, employees) => {
	if (employees.length === 0) return 'No one works here!';
	const empNames = employees.filter((emp) => employeeName === emp.name);
	if (empNames.length === 0) return `${employeeName} does not work here!`;
	let string = '';
	for (let i = 0; i < empNames.length; i++) {
		i === empNames.length - 1
			? (string += empNames[i].role)
			: (string += `${empNames[i].role} `);
	}
	return string;
};

module.exports = getEmployerRole;
