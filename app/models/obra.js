//Importa o mongoose
var mongoose = require('mongoose');
var schema = mongoose.Schema(
{
	titulo : {
		type: String,
		require: true
	},
	genero : {
		type: String,
		require: true
	},
	autor : {
		type: String,
		require: true
	},
	editora : {
		type: String,
		require: true
	}
});

mongoose.model('Obra', schema);