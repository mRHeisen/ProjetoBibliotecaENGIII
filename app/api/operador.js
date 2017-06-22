//Importa mongoose
var mongoose = require('mongoose');
//Cria objeto javaScrpit em branco
var api = {};
//Relaciona o model feito em models/genero para var model
var model = mongoose.model('Operador');

//Retorna uma lista de autores
api.lista = function(req, res){
	//Find passa um obect vazil e usa promess para obter resultado
	model
		.find({})
		.then(function(operador){
			//Manda a lista de operador se não houver erro em json
			res.json(operador);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});

};
api.adiciona = function(req, res){
	//operador recebida pelo req.body
	var operador = req.body
	console.log(operador);
	//Usa funçao do mongoose (create) para criar operador, espera uma operador recebida pelo req.body
	model
		.create(operador)
		.then(function(operador) {
			//Manda a operador criado com o com id do MongoDB
			res.json(operador)
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
api.buscaPorId = function(req, res){
	//Usa funçao do mongoose(findById) para procura pelo id que é passado em req.params.id pega o id
	model
		.findById(req.params.id)
		.then(function(operador){
			console.log(operador);
			//Se operador nao existis executa if e termina o fluxo e vai para função de error
			if(!operador) throw Error('operador não encontrada');
			res.json(operador);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 404 na requisição e o erro em json
			res.status(404).json(error);
		});

};
api.atualiza = function(req, res){
	//Usa funçao do mongoose (findByIdAndUpdate) para procura pelo id que for passa e atulizar o mesmo documento no
	//MongoDB
	operador = req.body;
	console.log(operador);
	model
		.findByIdAndUpdate(req.params.id, operador)
		.then(function(operador){ 
			//Manda a operador atualizada
			res.json(operador);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});
		
};
module.exports = api;