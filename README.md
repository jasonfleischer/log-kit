# simple-log-kit

## Description
Simple and lightweight log kit 

## Screenshots
![Screenshot](https://www.npmjs.com/package/simple-log-kit/screenshots/screen.png "Screenshot")

## Installation
'npm i simple-log-kit --save'

### JS Usage
``` javascript
const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")

log("normal message");

logE("error message");

turnOffNonErrorLogs();
```

