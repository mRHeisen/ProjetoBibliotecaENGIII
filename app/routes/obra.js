module.exports = function(app){

	var api = app.api.obra;
	
     app.route('/v1/obra')
        .get(api.lista) //Buscar recurso com get / espera get e uma funcção
        .post(api.adiciona);

    //Define o indentificador da rota em um unico lugar
     app.route('/v1/obra/:id')
     	.get(api.buscaPorId) //Buscar obra pelo id
        .delete(api.removePorId) //Remove pelo id da obra
        .put(api.atualiza) //Atuliza obra pelo id
};