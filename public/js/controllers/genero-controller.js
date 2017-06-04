angular.module('biblioteca').controller('GeneroController', function($scope, $http) {
		$http.get('/v1/genero')
			.success(function(generos) {
			$scope.generos = generos;
		})
		.error(function(erro) {
			console.log(erro);
		});
	});