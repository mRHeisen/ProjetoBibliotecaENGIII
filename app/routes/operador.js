module.exports = function(app){

	var api = app.api.operador;
	
     app.route('/v1/operador')
        .get(api.lista) //Buscar recurso com get / espera get e uma funcção
        .post(api.adiciona);

    //Define o indentificador da rota em um unico lugar
     app.route('/v1/operador/:id')
     	.delete(api.removePorId) //Remove pelo id da historias
     	.get(api.buscaPorId) //Buscar operador pelo id
        .put(api.atualiza) //Atuliza operador pelo id
};