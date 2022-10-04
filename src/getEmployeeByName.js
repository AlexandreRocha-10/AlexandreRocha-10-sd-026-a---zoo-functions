const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (!employeeName || employeeName === undefined) {
    return {};
  }
  return employees.find((employee) =>
    employee.lastName === employeeName
    || employee.firstName === employeeName);
}

console.log(getEmployeeByName({ name: 'Spry' }));

module.exports = getEmployeeByName;
