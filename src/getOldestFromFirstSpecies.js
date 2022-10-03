const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const resp = employees.find((employee) => employee.id === id).responsibleFor[0];
  const oldestAnimal = species.find((specie) => specie.id === resp)
    .residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldestAnimal);
}

module.exports = getOldestFromFirstSpecies;
