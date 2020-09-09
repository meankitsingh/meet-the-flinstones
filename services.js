module.exports = {
  getCars: function getCars() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 100, make: "Ford", model: "Model-T", year: 1904 },
          { id: 200, make: "Chevy", model: "Cavalier", year: 1994 },
          { id: 300, make: "Toyota", model: "Tundra", year: 2016 },
          { id: 400, make: "Honda", model: "Accord", year: 1998 },
          { id: 500, make: "Mazda", model: "Miata", year: 1999 },
          { id: 600, make: "Nissan", model: "Pathfinder", year: 2018 },
          { id: 700, make: "Ford", model: "Fiesta", year: 2002 },
          { id: 800, make: "Hyundai", model: "Accent", year: 2000 },
          { id: 900, make: "Dodge", model: "Durango", year: 2005 },
          { id: 1000, make: "Lincoln", model: "Town Car", year: 1997 },
        ]);
      }, 1000);
    });
  },

  getPeople: function getPeople() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 100, name: "Fred Flinstone", cars: [400, 100] },
          { id: 200, name: "George Jetson", cars: [1000, 500] },
          { id: 300, name: "Bart Simpson", cars: [900] },
          { id: 400, name: "Bugs Bunny", cars: [300, 100, 500] },
          { id: 500, name: "Leroy Brown", cars: [650, 200, 800] },
        ]);
      });
    });
  },
};
