var LOG_NON_ERROR_MESSAGES = true;

exports.log = (msg) => {
	if (LOG_NON_ERROR_MESSAGES)
		console.log(msg);
};

exports.logE = (msg) => {
	console.log("%c ERROR: " + msg, "background: red; color: white; display: block;");
};


// common wrapper
exports.log = {}
log.e = function(){
	console.log("%c ERROR: " + msg, "background: red; color: white; display: block;");
}
log.i = function(){
	if (LOG_NON_ERROR_MESSAGES)
		console.log(msg);
}
