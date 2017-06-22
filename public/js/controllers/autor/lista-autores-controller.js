angular.module('biblioteca')
	.controller('ListaAutoresController', function($scope, recursoAutor, $http, $routeParams, $location, cadastroDeAutor) {

		$scope.autores = [];
			$http.get('/v1/autor')
			.success(function(autor) {
			$scope.autores = autor;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.mensagem = '';

		$scope.remover = function(autor) {
		var confirmacao = confirm("Excluir o autor: "+autor.nome);
		if(confirmacao === true){
		recursoAutor.delete({autorId: autor._id}, function() {
			var indiceDoAutor = $scope.autores.indexOf(autor);
			$scope.autores.splice(indiceDoAutor, 1);
			$scope.mensagem = 'Autor ' + autor.nome + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar o autor ' + autor.nome;
		});
		};
		};


	});