//Importa mongoose
var mongoose = require('mongoose');
//Cria objeto javaScrpit em branco
var api = {};
//Relaciona o model feito em models/genero para var model
var model = mongoose.model('Editora');

//Retorna uma lista de editoras
api.lista = function(req, res){
	//Find passa um obect vazil e usa promess para obter resultado
	model
		.find({})
		.then(function(editora){
			//Manda a lista de generos se não houver erro em json
			res.json(editora);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});

};
api.adiciona = function(req, res){
	//editora recebida pelo req.body
	var editora = req.body
	console.log(editora);
	//Usa funçao do mongoose (create) para criar editora, espera uma editora recebida pelo req.body
	model
		.create(editora)
		.then(function(editora) {
			//Manda a editora criado com o com id do MongoDB
			res.json(editora)
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
		.then(function(editora){
			console.log(editora);
			//Se editora nao existis executa if e termina o fluxo e vai para função de error
			if(!editora) throw Error('editora não encontrada');
			res.json(editora);
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
	editora = req.body;
	console.log(editora);
	model
		.findByIdAndUpdate(req.params.id, editora)
		.then(function(editora){ 
			//Manda a editora atualizada
			res.json(editora);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});
		
};
module.exports = api;