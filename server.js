//Carrega Modulo do node HTTP usada para criar servidor
var http =  require('http');

//Carrega modulo do express em config
var app = require('./config/express');
//Carrega modulo do database em config
require('./config/database')('localhost/biblioteca');
//Usando o HTTP para cirar o servidor 
//(CreateServer) Passando express  (app) para lidar com as req = Requisiçoes e res = Respostas
//(Listen) passa a porta a ser ouvida e uma função que ser executada
http.createServer(app).listen(3000, function(){
	console.log("Serividor Rodando");
});