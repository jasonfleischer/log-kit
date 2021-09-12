# simple-log-kit

## Description
Simple and lightweight log kit 

## Screenshots
![Screenshot](./screenshots/screen.png "Sreenshot")

## Installation
'npm i simple-log-kit --save'

### JS Usage
```
const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")

log("normal message");

logE("error message");

turnOffNonErrorLogs();
```

