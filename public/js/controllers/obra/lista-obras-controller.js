angular.module('biblioteca')
	.controller('ListaObrasController', function($scope, recursoObra, $http, $routeParams, $location, cadastroDeObra) {

		$scope.obras = [];
			$http.get('/v1/obra')
			.success(function(obra) {
			$scope.obras = obra;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.mensagem = '';

		$scope.remover = function(obra) {
		var confirmacao = confirm("Excluir a Obra: "+obra.titulo);
		if(confirmacao === true){
		recursoObra.delete({obraId: obra._id}, function() {
			var indiceDaObra = $scope.obras.indexOf(obra);
			$scope.obras.splice(indiceDaObra, 1);
			$scope.mensagem = 'Obra ' + obra.titulo + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a obra ' + obra.titulo;
		});
		};
		};


	});