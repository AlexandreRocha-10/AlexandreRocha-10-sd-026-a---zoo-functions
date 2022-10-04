const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getEmployee = (empl) => {
  const responsab = employees
    .find((e) => empl.name === e.firstName || empl.name === e.lastName || empl.id === e.id);
  const spec = [];
  const loc = [];
  const arrays = () => species.forEach((specie) => {
    if (responsab.responsibleFor.some((specieId) => specieId === specie.id)) {
      spec.push(specie.name);
      loc.push(specie.location);
    }
  });
  arrays();
  return {
    id: responsab.id,
    fullName: `${responsab.firstName} ${responsab.lastName}`,
    species: spec,
    locations: loc,
  };
};

// console.log(getEmployee({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));

const listEmployees = () => {
  const arrayEmp = [];
  employees.forEach((emp) => {
    arrayEmp.push(getEmployee({ name: emp.firstName }));
  });
  return arrayEmp;
};

// console.log(listEmployees());

function getEmployeesCoverage(emps) {
  let result;
  if (emps === undefined) {
    result = listEmployees();
  } else if (employees
    .some((e) => e.firstName === emps.name || e.lastName === emps.name || e.id === emps.id)) {
    result = getEmployee(emps);
  } else {
    throw new Error('Informações inválidas');
  }
  return result;
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
