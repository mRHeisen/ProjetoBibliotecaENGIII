module.exports = function(app){

	var api = app.api.emprestimo;
	
     app.route('/v1/emprestimo')
        .get(api.lista) //Buscar recurso com get / espera get e uma funcção
        .post(api.adiciona);

    //Define o indentificador da rota em um unico lugar
     app.route('/v1/emprestimo/:id')
     	.get(api.buscaPorId) //Buscar autor pelo id
        .put(api.atualiza) //Atuliza autor pelo id
};