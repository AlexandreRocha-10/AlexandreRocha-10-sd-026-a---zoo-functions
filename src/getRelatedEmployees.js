const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
}

console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  const employeesList = [];
  if (isManager(managerId)) {
    employees.map((employee) => employeesList.push(`${employee.firstName} ${employee.lastName}`));
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employeesList;
}

module.exports = { isManager, getRelatedEmployees };
