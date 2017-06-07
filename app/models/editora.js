//Importa o mongoose
var mongoose = require('mongoose');
var schema = mongoose.Schema(
{
	nome : {
		type: String,
		require: true
	},
	email : {
		type: String,
		require: true
	},
	endereco : {
		type: String,
		require: true
	},
});

mongoose.model('Editora', schema);