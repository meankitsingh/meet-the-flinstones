const services = require("./services");
const { getCars, getPeople } = services;

function datamapper() {
  this.getPersonsCars = function getPersonsCars(personId) {
    let Result = MakeRequest(personId);
    return Result;
  };
}
function MakeRequest(personId) {
  let person;
  let personCars = [];

  return getPeople().then((list) => {
    person = list.find((x) => x.id === personId);
    return getCars().then((car_list) => {
      personCars = person.cars.map((carId) =>
        car_list.find((x) => x.id === carId)
      );
      const carsObject = [];
      personCars
        .sort((a, b) => a.id - b.id)
        .forEach((car) => {
          if (car) carsObject.push(`${car.year} ${car.make} ${car.model}`);
        });
      return { id: person.id, name: person.name, cars: carsObject };
    });
  });
}

module.exports = datamapper;
