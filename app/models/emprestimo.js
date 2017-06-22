//Importa o mongoose
var mongoose = require('mongoose');
var schema = mongoose.Schema(
{
	usuario : {
		type: Object,
		require: true
	},
	diasDeEmprestimo : {
		type: String,
		require: true
	},
	dataEntrega : {
		type: String,
		require: true
	},
	obras : [
	],
	oeprador : {
		type: Object,
		require: true
	},
	situacao : {
		type: Boolean,
		require: true
	}
});

mongoose.model('Emprestimo', schema);
