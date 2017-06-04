angular.module('biblioteca').controller('EditoraController', function($scope, $http) {
		$http.get('/v1/editora')
			.success(function(editora) {
			$scope.editoras = editora;
		})
		.error(function(erro) {
			console.log(erro);
		});
	});