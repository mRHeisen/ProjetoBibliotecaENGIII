module.exports = function(uri){
//Importa mongoose
var mongoose = require('mongoose');
//Utiliza o mongoose para conectar ao banco usando uma url de conexão 
mongoose.connect('mongodb://' + uri);
// Acessa a conexão feitao no mongoose pelo .connection utiliza a funcção on para escutar o evento "connected" e uma
// função para ser executada assim que for conectado
mongoose.connection.on('connected', function(){
	console.log("Contectado ao Mongo DB")
});
// Acessa a conexão feitao no mongoose pelo .connection utiliza a funcção on para escutar o evento "error" e uma
// função para ser executada assim que for dado um erro evitando derrubar toda a aplicação
mongoose.connection.on('error', function(error){
		console.log('Erro na conexão: ' +error);

});
// Acessa a conexão feitao no mongoose pelo .connection utiliza a funcção on para escutar o evento "disconnected" e uma
// função para ser executada assim que for dado um disconexcão
mongoose.connection.on('disconnected', function(){

	console.log('Desconectado do MongoDB');

});
//Objeto do node que da acesso ao que acontece no SO escuta o evento SIGINT e executa uma função quando ele for 
//desparado
process.on('SIGINT', function(){
	// close executa a função assim que for terminada e despara um evendo de "disconnected"
	mongoose.connection.close(function(){
		console.log(' \nConexão fechada pelo término da aplicação');
		//Indica que o processo foi fexado normalmente e não um erro usando o padrão de retorno "0"
		process.exit(0);
	});
});
};
