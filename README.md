## simple-log-kit

### Description
Simple and lightweight log kit 

### Screenshot
![Screenshot](https://jasonfleischer.github.io/simple-log-kit-demo/screenshots/screen.png "Screenshot")


![test](https://raw.github.com/jasonfleischer/simple-log-kit-demo/master/screenshots/screen.png)

### Demo
Click [here](https://jasonfleischer.github.io/simple-log-kit-demo/) to see the demo

### Installation
'npm i simple-log-kit --save'

### JS Usage
``` javascript
const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")

log("normal message");

logE("error message");

turnOffNonErrorLogs();
```

