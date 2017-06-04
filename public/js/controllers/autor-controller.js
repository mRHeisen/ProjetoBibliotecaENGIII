angular.module('biblioteca').controller('AutorController', function($scope, $http) {
		$http.get('/v1/autor')
			.success(function(autor) {
			$scope.autores = autor;
		})
		.error(function(erro) {
			console.log(erro);
		});
	});