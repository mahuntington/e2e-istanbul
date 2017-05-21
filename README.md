# Example of End To End Testing Using Selenium Webdriver and Jasmine Tests With Istanbul Code Coverage

## Installation

### Global Installation

Firstly, install `grunt-cli` globally:

```
npm install -g grunt-cli
```

Next install `jasmine-node` test runner globally:

```
npm install -g jasmine-node
```

Now we'll download a browser driver that Selenium will use to control Firefox:

1. Download firefox webdriver: https://github.com/mozilla/geckodriver/releases/tag/v0.16.1
1. Put the driver somewhere in your PATH
    - e.g. `/usr/local/bin`

### Local Installation

1. clone this repo somewhere on your computer
1. `cd` into the newly created directory for the locally cloned version of this repo
1. Install all necessary node packages:

    ```
    npm install
    ```

## Running

Website code from `src/` into the `prod/` directory and instrument it:

```
grunt dev
```

Start a local static file web server in a different terminal window:

```
grunt server
```

Back in the previous terminal window, run the tests:

```
jasmine-node specs/test-spec.js
```

The tests have been run, and the coverage has been generated.  Create human readble report:

```
grunt report
```

This will create an html report and put it in `coverage/lcov-report/index.html`
