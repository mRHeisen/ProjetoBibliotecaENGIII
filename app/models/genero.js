//Importa o mongoose
var mongoose = require('mongoose');
var schema = mongoose.Schema(
{
	nome : {
		type: String,
		require: true
	}
});

mongoose.model('Genero', schema);