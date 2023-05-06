const getEmployerRole = (employeeName, employees) => {
  const employeeDetails = employees.find(employee => employeeName === employee.name)
  return employeeDetails.role;
};

module.exports = getEmployerRole;
