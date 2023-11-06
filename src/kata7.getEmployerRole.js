const getEmployerRole = (employeeName, employees) => {
  for (const employee of employees) {
    if (employee.name === employeeName) {
      return employee.role;
    }
  }
};

module.exports = getEmployerRole;
