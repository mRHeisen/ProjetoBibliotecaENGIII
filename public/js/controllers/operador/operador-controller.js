angular.module('biblioteca').controller('OperadorController', function($scope, $http, $routeParams, cadastroDeOperador, recursoOperador) {
		
	$scope.mensagem = '';
	$scope.operador = {};

	if($routeParams.operadorId) {
				recursoOperador.get({operadorId: $routeParams.operadorId}, function(operador) {
				$scope.operador = operador;
				}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o operador'
				});
		};

	cadastrar = function(operador) {
		cadastroDeOperador.cadastrar(operador)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.operador = {};
			})
			.catch(function(erro) {
				$scope.mensagem = erro.mensagem;
			});	
		};

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			var operador = $scope.operador;
			cadastrar(operador);
			}else{
			$scope.mensagem = 'Formulario invalido';
			};
		};
	});