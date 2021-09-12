# simple-log-kit

## Description
Simple and lightweight log kit 

## Screenshot
![Screenshot](https://www.npmjs.com/package/simple-log-kit/screenshots/screen.png "Screenshot")

## Demo
Click [here](https://jasonfleischer.github.io/simple-log-kit-demo/) to see the demo

## Installation
'npm i simple-log-kit --save'

### JS Usage
``` javascript
const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")

log("normal message");

logE("error message");

turnOffNonErrorLogs();
```

