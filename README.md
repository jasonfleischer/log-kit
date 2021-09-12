## simple-log-kit

A simple and lightweight log kit 

![Screenshot](https://jasonfleischer.github.io/simple-log-kit-demo/screenshot/screen.png "Screenshot")

#### Demo
Click [HERE](https://jasonfleischer.github.io/simple-log-kit-demo/) to see the demo

#### Installation
```bash
$ npm i simple-log-kit --save
```

#### JS Usage
``` javascript
const { log, logE, turnOffNonErrorLogs } = require("../node_modules/simple-log-kit/index")

log("normal message");

logE("error message");

turnOffNonErrorLogs();
```

