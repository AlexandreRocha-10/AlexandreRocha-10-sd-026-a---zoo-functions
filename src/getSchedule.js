const data = require('../data/zoo_data');
const { species, hours } = require('../data/zoo_data');

const animalAv = (av) => {
  const specieAv = species.find((e) => e.name === av).availability;
  return specieAv;
};

console.log(animalAv('lions'));

const schedule = (dayOfWeek) => {
  const result = {};
  const day = hours[dayOfWeek];
  if (dayOfWeek === 'Monday') {
    result.Monday = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return result;
  }
  const filtered = species.filter((e) => e.availability.includes(dayOfWeek));
  result[dayOfWeek] = {
    officeHour: `Open from ${day.open}am until ${day.close}pm`,
    exhibition: filtered.map((e) => e.name),
  };
  return result;
};

const allDays = () => {
  const week = Object.keys(hours);
  const result = {};
  week.forEach((day) => {
    const days = schedule(day)[day];
    result[day] = days;
  });
  return result;
};

function getSchedule(scheduleTarget) {
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return animalAv(scheduleTarget);
  }
  if (!scheduleTarget || scheduleTarget === undefined) {
    return allDays();
  }
  if (Object.keys(hours).some((e) => e === scheduleTarget)) {
    return schedule(scheduleTarget);
  }
  return allDays();
}

module.exports = getSchedule;
