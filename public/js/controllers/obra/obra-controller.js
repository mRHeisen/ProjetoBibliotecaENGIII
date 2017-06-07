angular.module('biblioteca')
	.controller('ObraController', function($scope, recursoObra, $http, $routeParams, $location, cadastroDeObra) {

		$scope.obra = {};
		$scope.obras = [];
			$http.get('/v1/obra')
			.success(function(obra) {
			$scope.obras = obra;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.generos = [];
			$http.get('/v1/genero')
			.success(function(generos) {
			$scope.generos = generos;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.autores = [];
			$http.get('/v1/autor')
			.success(function(autor) {
			$scope.autores = autor;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.editoras = [];
			$http.get('/v1/editora')
			.success(function(editora) {
			$scope.editoras = editora;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.mensagem = '';

		if($routeParams.obraId) {
				recursoObra.get({obraId: $routeParams.obraId}, function(obra) {
				$scope.obra = obra;
				}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a obra'
				});
		}

		cadastrar = function(obra) {
		cadastroDeObra.cadastrar(obra)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.obra = {};
			})
			.catch(function(erro) {
				$scope.mensagem = erro.mensagem;
			});	
		};

		$scope.submeter = function() {
			if ($scope.formulario.$valid) {
				var obra = $scope.obra;
				cadastrar(obra);
				}else{
				$scope.mensagem = 'Formulario invalido';
				};
		};

	});
