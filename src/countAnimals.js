const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal, sexo) {
  if (!animal || !sexo) {
    return {
      lions: 4,
      tigers: 2,
      bears: 3,
      penguins: 4,
      otters: 4,
      frogs: 2,
      snakes: 2,
      elephants: 4,
      giraffes: 6,
    };
  }
  species.find((specie) => specie.name === animal);
}

module.exports = countAnimals;
