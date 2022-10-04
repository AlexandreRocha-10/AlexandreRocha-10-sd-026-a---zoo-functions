const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const child = entrants.filter((entrant) => entrant.age < 18);
  const adult = entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50);
  const senior = entrants.filter((entrant) => entrant.age >= 50);
  return {
    child: child.length,
    adult: adult.length,
    senior: senior.length,
  };
}

function calculateEntry(entrants) {
  if (!entrants || Object.entries(entrants).length === 0) {
    return 0;
  }

  const child = entrants
    .filter((entry) => entry.age < 18).length * data.prices.child;
  const adult = entrants
    .filter((entry) => entry.age >= 18 && entry.age < 50).length * data.prices.adult;
  const senior = entrants
    .filter((entry) => entry.age >= 50).length * data.prices.senior;

  return child + adult + senior;
}

module.exports = { calculateEntry, countEntrants };
