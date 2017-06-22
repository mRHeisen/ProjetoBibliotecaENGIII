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
	.factory('recursoEditora', function($resource) {

		return $resource('/v1/editora/:editoraId', null, {
			'update' : { 
				method: 'PUT'
			},
			'patch' : { 
				method: 'PATCH'
			}
		});
	})
	.factory('recursoAutor', function($resource) {

		return $resource('/v1/autor/:autorId', null, {
			'update' : { 
				method: 'PUT'
			},
			'patch' : { 
				method: 'PATCH'
			}
		});
	})
	.factory('recursoGenero', function($resource) {

		return $resource('/v1/genero/:generoId', null, {
			'update' : { 
				method: 'PUT'
			},
			'patch' : { 
				method: 'PATCH'
			}
		});
	})
	.factory('recursoOperador', function($resource) {

		return $resource('/v1/operador/:operadorId', null, {
			'update' : { 
				method: 'PUT'
			},
			'patch' : { 
				method: 'PATCH'
			}
		});
	})
	.factory("cadastroDeGenero", function(recursoGenero, $q) {
		var service = {};
		service.cadastrar = function(genero) {
			return $q(function(resolve, reject) {

				if(genero._id) {
					recursoGenero.update({generoId: genero._id}, genero, function() {
						resolve({
							mensagem: 'Genero ' + genero.nome + ' atualizado com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o genero ' + genero.nome
						});
					});

				} else {
					recursoGenero.save(genero, function() {
						resolve({
							mensagem: 'Genero ' + genero.nome + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a genero ' + genero.nome
						});
					});
				}
			});
		};
		return service;
    })
	.factory("cadastroDeAutor", function(recursoAutor, $q) {
		var service = {};
		service.cadastrar = function(autor) {
			return $q(function(resolve, reject) {

				if(autor._id) {
					recursoAutor.update({autorId: autor._id}, autor, function() {
						resolve({
							mensagem: 'Autor ' + autor.nome + ' atualizado com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o autor ' + autor.nome
						});
					});

				} else {
					recursoAutor.save(autor, function() {
						resolve({
							mensagem: 'Autor ' + autor.nome + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a autor ' + autor.nome
						});
					});
				}
			});
		};
		return service;
    })
	.factory("cadastroDeEditora", function(recursoEditora, $q) {
		var service = {};
		service.cadastrar = function(editora) {
			return $q(function(resolve, reject) {

				if(editora._id) {
					recursoEditora.update({editoraId: editora._id}, editora, function() {
						resolve({
							mensagem: 'Editora ' + editora.nome + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar a editora ' + editora.nome
						});
					});

				} else {
					recursoEditora.save(editora, function() {
						resolve({
							mensagem: 'Editora ' + editora.nome + ' incluída com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir a editora ' + editora.nome
						});
					});
				}
			});
		};
		return service;
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

				} else {;
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
    })
    .factory("cadastroDeOperador", function(recursoOperador, $q) {
		var service = {};
		service.cadastrar = function(operador) {
			return $q(function(resolve, reject) {

				if(operador._id) {
					recursoOperador.update({operadorId: operador._id}, operador, function() {
						resolve({
							mensagem: 'Operador ' + operador.nome + ' atualizada com sucesso',
							inclusao: false
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível atualizar o operador ' + operador.nome
						});
					});

				} else {;
					recursoOperador.save(operador, function() {
						resolve({
							mensagem: 'Operador ' + operador.nome + ' incluído com sucesso',
							inclusao: true
						});
					}, function(erro) {
						console.log(erro);
						reject({
							mensagem: 'Não foi possível incluir o operador ' + operador.nome
						});
					});
				}
			});
		};
		return service;
    });