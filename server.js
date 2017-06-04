var http =  require('http');

			   
var uristring = 'mongodb://MiguelAvilla:123456@ds161159.mlab.com:61159/heroku_9g38kcvg';

var app = require('./config/express');
var port = process.env.PORT || 3000;
require('./config/database')(uristring);
http.createServer(app).listen(port, function(){
	console.log("Serividor Rodando");
});