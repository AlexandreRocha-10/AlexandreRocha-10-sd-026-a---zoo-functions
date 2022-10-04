const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objAnimais = {};
    species.forEach(({ name, residents }) => {
      objAnimais[name] = residents.length;
    });
    return objAnimais;
  }
  const { specie, sex } = animal;
  if (sex) {
    return species.find((element) => element.name === specie).residents
      .filter((element2) => element2.sex === sex).length;
  }
  return species.find(({ name }) => name === specie).residents.length;
}

module.exports = countAnimals;
