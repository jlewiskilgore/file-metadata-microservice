var express = require('express');

var app =  express();

app.set('port', (process.env.PORT || 8080));

app.listen(process.env.PORT || 8080, function() {
	console.log("Server Listening on Port 8080");
});