//Importa mongoose
var mongoose = require('mongoose');
//Cria objeto javaScrpit em branco
var api = {};
//Relaciona o model feito em models/genero para var model
var model = mongoose.model('Autor');

//Retorna uma lista de autores
api.lista = function(req, res){
	//Find passa um obect vazil e usa promess para obter resultado
	model
		.find({})
		.then(function(autor){
			//Manda a lista de generos se não houver erro em json
			res.json(autor);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});

};
api.adiciona = function(req, res){
	//autor recebida pelo req.body
	var autor = req.body
	console.log(autor);
	//Usa funçao do mongoose (create) para criar autor, espera uma autor recebida pelo req.body
	model
		.create(autor)
		.then(function(autor) {
			//Manda a autor criado com o com id do MongoDB
			res.json(autor)
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});

};
api.removePorId = function(req, res){
	//Usa funçao do mongoose (remove) para remover, espera o criterio de remoção 	
	model
		.remove({_id: req.params.id})
		.then(function() {
			//Manda o status 204 na requisição que ocorreu tudo ok
			res.sendStatus(204);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});

};
module.exports = api;