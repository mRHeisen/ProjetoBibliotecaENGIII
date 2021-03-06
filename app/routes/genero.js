module.exports = function(app){

	var api = app.api.genero;
	
     app.route('/v1/genero')
        .get(api.lista) //Buscar recurso com get / espera get e uma funcção
        .post(api.adiciona);

    //Define o indentificador da rota em um unico lugar
     app.route('/v1/genero/:id')
     	.delete(api.removePorId) //Remove pelo id da historias
     	.get(api.buscaPorId) //Buscar autor pelo id
        .put(api.atualiza) //Atuliza autor pelo id
};