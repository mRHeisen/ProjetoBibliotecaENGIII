module.exports = function(app){

	var api = app.api.autor;
	
     app.route('/v1/autor')
        .get(api.lista) //Buscar recurso com get / espera get e uma funcção
        .post(api.adiciona);

    //Define o indentificador da rota em um unico lugar
     app.route('/v1/autor/:id')
     	.delete(api.removePorId) //Remove pelo id da historias
};