const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objAnimais = {};
    species.forEach((specie) => {
      objAnimais[specie.name] = objAnimais.residents.length;
    });
    return objAnimais;
  }

  // const selectSpecie = species.find((specie) => specie.name === animal);
}

module.exports = countAnimals;
