angular.module('biblioteca').controller('GeneroController', function($scope, $http, $routeParams, cadastroDeGenero, recursoGenero) {
		
	$scope.mensagem = '';
	$scope.genero = {};

	if($routeParams.generoId) {
				recursoGenero.get({generoId: $routeParams.generoId}, function(genero) {
				$scope.genero = genero;
				}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o genero'
				});
		};

	cadastrar = function(genero) {
		cadastroDeGenero.cadastrar(genero)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.genero = {};
			})
			.catch(function(erro) {
				$scope.mensagem = erro.mensagem;
			});	
		};

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			var genero = $scope.genero;
			cadastrar(genero);
			}else{
			$scope.mensagem = 'Formulario invalido';
			};
		};
	});