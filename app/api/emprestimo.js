//Importa mongoose
var mongoose = require('mongoose');
//Cria objeto javaScrpit em branco
var api = {};
//Relaciona o model feito em models/genero para var model
var model = mongoose.model('Emprestimo');

//Retorna uma lista de editoras
api.lista = function(req, res){
	//Find passa um obect vazil e usa promess para obter resultado
	model
		.find({})
		.then(function(emprestimo){
			//Manda a lista de emprestimo se não houver erro em json
			res.json(emprestimo);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});

};
api.adiciona = function(req, res){
	//emprestimo recebida pelo req.body
	var emprestimo = req.body
	console.log(emprestimo);
	//Usa funçao do mongoose (create) para criar emprestimo, espera uma emprestimo recebida pelo req.body
	model
		.create(emprestimo)
		.then(function(emprestimo) {
			//Manda a emprestimo criado com o com id do MongoDB
			res.json(emprestimo)
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
		.then(function(emprestimo){
			console.log(emprestimo);
			//Se emprestimo nao existis executa if e termina o fluxo e vai para função de error
			if(!emprestimo) throw Error('emprestimo não encontrada');
			res.json(emprestimo);
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
	emprestimo = req.body;
	console.log(emprestimo);
	model
		.findByIdAndUpdate(req.params.id, emprestimo)
		.then(function(emprestimo){ 
			//Manda a emprestimo atualizada
			res.json(emprestimo);
		}, function(error){
			//Mostra o erro no console
			console.log(error);
			//Manda o status 500 na requisição e o erro em json
			res.status(500).json(error);
		});
		
};
module.exports = api;