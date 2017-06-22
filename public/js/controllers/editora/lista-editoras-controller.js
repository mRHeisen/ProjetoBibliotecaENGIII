angular.module('biblioteca')
	.controller('ListaEditorasController', function($scope, recursoEditora, $http, $routeParams, $location, cadastroDeEditora) {

		$scope.editoras = [];
			$http.get('/v1/editora')
			.success(function(editora) {
			$scope.editoras = editora;
			})
			.error(function(erro) {
			console.log(erro);
			});
		$scope.mensagem = '';

		$scope.remover = function(editora) {
		var confirmacao = confirm("Excluir a editora: "+editora.nome);
		if(confirmacao === true){
		recursoEditora.delete({editoraId: editora._id}, function() {
			var indiceDaEditora = $scope.editoras.indexOf(editora);
			$scope.editoras.splice(indiceDaEditora, 1);
			$scope.mensagem = 'Editora ' + editora.nome + ' removida com sucesso!';
		}, function(erro) {
			console.log(erro);
			$scope.mensagem = 'Não foi possível apagar a editora ' + editora.nome;
		});
		};
		};


	});