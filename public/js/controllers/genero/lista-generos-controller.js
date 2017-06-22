angular.module('biblioteca')
	.controller('ListaGenerosController', function($scope, recursoGenero, $http, $routeParams, $location, cadastroDeGenero) {

		$scope.generos = [];
			$http.get('/v1/genero')
			.success(function(genero) {
			$scope.generos = genero;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.mensagem = '';

		$scope.remover = function(genero) {
		var confirmacao = confirm("Excluir o genero: "+genero.nome);
		if(confirmacao === true){
		recursoGenero.delete({generoId: genero._id}, function() {
			var indiceDoGenero = $scope.generos.indexOf(genero);
			$scope.generos.splice(indiceDoGenero, 1);
			$scope.mensagem = 'Genero ' + genero.nome + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o genero ' + genero.nome;
		});
		};
		};


	});