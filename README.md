# Data Mapper

### Purpose:

The purpose of this excercise is to evaluate a javascript candidate's ability to take two asynchronous data sets and map them to a result. In this lab, there are 5 tests already written to define the expected result given different user ID's when the test function is called. The candidate is responsible for implementing the function in a manner that makes all 5 tests pass.

### Acceptance Criteria:

- Complete the datamapper.getPersonsCars function so that it returns a person's cars from the provided getCars and getPeople functions given the personId parameter. The result of the function should be a single object with the following schema:

{
    id: 100,
    name: 'Fred Flinstone',
    cars: ['1998 Honda Accord', '1904 Ford Model-T']
}

### Running the Tests:

Make sure Node is installed on the workstation.  Browse to the root directory of this repository. Type the following to run tests:

```npm test```

This will start the mocha tests using the mocha library in the ./node_modules/mocha/bin/mocha directory and target all javascript files in the ./app directory.  The test script will run in "watch" mode which will cause the tests to run any time a file is saved in the ./app directory of the project.

