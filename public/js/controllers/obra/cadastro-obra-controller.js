angular.module('biblioteca')
	.controller('CadastroObraController', function($scope, recursoObra, $http, $routeParams, $location, cadastroDeObra) {

		$scope.obra = {};
		$scope.obras = [];
		$scope.mensagem = '';

		if($routeParams.obraId) {
				recursoObra.get({obraId: $routeParams.obraId}, function(obra) {
				}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a obra'
				});
		}

		$http.get('/v1/obra')
		.success(function(obra) {
		$scope.obras = obra;
		})
		.error(function(erro) {
		console.log(erro);
		});

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
