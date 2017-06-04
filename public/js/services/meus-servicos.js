angular.module('meusServicos', ['ngResource'])
	.factory('recursoObra', function($resource) {

		return $resource('/v1/obra/:obraId', null, {
			'update' : { 
				method: 'PUT'
			},
			'patch' : { 
				method: 'PATCH'
			}
		});
	})
	.factory("cadastroDeObra", function(recursoObra, $q) {
		var service = {};
		service.cadastrar = function(obra) {
			return $q(function(resolve, reject) {

				if(obra._id) {
					recursoObra.update({obraId: obra._id}, obra, function() {
						resolve({
							mensagem: 'Obra ' + obra.titulo + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a obra ' + obra.titulo
						});
					});

				} else {
					recursoObra.save(obra, function() {
						resolve({
							mensagem: 'Obra ' + obra.titulo + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a obra ' + obra.titulo
						});
					});
				}
			});
		};
		return service;
    });