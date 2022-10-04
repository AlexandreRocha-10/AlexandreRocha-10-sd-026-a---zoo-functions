const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployee = (employee) => {
  const responsab = employees
    .find((element) => employee.firstName === element.name
      || employee.lastName === element.name
      || employee.id === element.id);
  return responsab;
};

console.log(getEmployee({ firstName: 'Ardith' }));

function getEmployeesCoverage(emps) {

}

module.exports = getEmployeesCoverage;
