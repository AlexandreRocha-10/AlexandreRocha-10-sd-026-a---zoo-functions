const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  let boolean = true;
  const animalFilter = species.find((element) => element.name === animal);
  animalFilter.residents.forEach((resident) => {
    if (resident.age < age) {
      boolean = false;
    }
  });
  return boolean;
}

console.log(getAnimalsOlderThan('otters', 52245));

module.exports = getAnimalsOlderThan;
