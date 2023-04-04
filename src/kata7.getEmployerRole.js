const getEmployerRole = (employeeName, employees) => {
    const workerName = employees.find(
    (employee) => employee.name === employeeName
  );
  return workerName.role;
};

module.exports = getEmployerRole;
