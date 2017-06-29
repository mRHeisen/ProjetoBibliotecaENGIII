angular.module('biblioteca')
	.controller('ListaEmprestimosController', function($scope, $http, $routeParams, $location) {
		$scope.emprestimos = [];
			$http.get('/v1/emprestimo')
			.success(function(emprestimo) {
			$scope.emprestimos = emprestimo;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.mensagem = '';

	});