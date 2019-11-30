# Setup

In order to setup this project, you just need to install its dependencies:

    $ npm install
    
All dependencies are defined in the `devDependencies` section, and they are only required
to build the project.

# Running

To run the application, you can use:

    $ npm run start <path-to-file>
    
e.g.

    $ npm run start example.txt
   
    > hotel-finder@1.0.0 start /home/sandy/Projects/thoughtworks/hotel-finder
    > ts-node src/index.ts $FILE "example.txt"
    
    Lakewood
    Bridgewood
    Ridgewood

The application folder already includes an `example.txt` input file.

# Tests

In order to test the application, just `npm run test`. 
If you want to see the test coverage report, `npm run coverage`.