var datamapper = require("./data-mapper");

describe("datamapper", () => {
  var testObject;

  beforeEach(() => {
    testObject = new datamapper();
  });

  it("should get mapped Fred's cars", async () => {
    const personId = 100;

    const result = await testObject.getPersonsCars(personId);
    console.log(result);
    expect(result.id).equals(personId);
    expect(result.name).equals("Fred Flinstone");
    expect(result.cars).to.eql(["1904 Ford Model-T", "1998 Honda Accord"]);
  });

  it("should get mapped George's cars", async () => {
    const personId = 200;

    const result = await testObject.getPersonsCars(personId);

    expect(result.id).equals(personId);
    expect(result.name).equals("George Jetson");
    expect(result.cars).to.eql(["1999 Mazda Miata", "1997 Lincoln Town Car"]);
  });

  it("should get mapped Barts's cars", async () => {
    const personId = 300;

    const result = await testObject.getPersonsCars(personId);
    expect(result.id).equals(personId);
    expect(result.name).equals("Bart Simpson");
    expect(result.cars).to.eql(["2005 Dodge Durango"]);
  });

  it("should get mapped Bugs' cars", async () => {
    const personId = 400;

    const result = await testObject.getPersonsCars(personId);
    expect(result.id).equals(personId);
    expect(result.name).equals("Bugs Bunny");
    expect(result.cars).to.eql([
      "1904 Ford Model-T",
      "2016 Toyota Tundra",
      "1999 Mazda Miata",
    ]);
  });

  it("should get mapped Leroy's cars", async () => {
    const personId = 500;

    const result = await testObject.getPersonsCars(personId);
    expect(result.id).equals(personId);
    expect(result.name).equals("Leroy Brown");
    expect(result.cars).to.eql(["1994 Chevy Cavalier", "2000 Hyundai Accent"]);
  });
});
