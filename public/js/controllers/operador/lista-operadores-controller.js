angular.module('biblioteca')
	.controller('ListaOperadoresController', function($scope, recursoOperador, $http, $routeParams, $location, cadastroDeOperador) {

		$scope.operadores = [];
			$http.get('/v1/operador')
			.success(function(operador) {
			$scope.operadores = operador;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.mensagem = '';

		$scope.remover = function(operador) {
		var confirmacao = confirm("Excluir o operador: "+operador.nome);
		if(confirmacao === true){
		recursoOperador.delete({operadorId: operador._id}, function() {
			var indiceDoOperador = $scope.operadores.indexOf(operador);
			$scope.operadores.splice(indiceDoOperador, 1);
			$scope.mensagem = 'Operador ' + operador.nome + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o operador ' + operador.nome;
		});
		};
		};


	});