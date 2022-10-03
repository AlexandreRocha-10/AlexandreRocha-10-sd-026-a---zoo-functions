const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const employeesList = [];
  if (isManager(managerId)) {
    const subord = employees.filter((emp) => emp.managers.includes(managerId));
    subord.map((employee) => employeesList.push(`${employee.firstName} ${employee.lastName}`));
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employeesList;
}

module.exports = { isManager, getRelatedEmployees };
