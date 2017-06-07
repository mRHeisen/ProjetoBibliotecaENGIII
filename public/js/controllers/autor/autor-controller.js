angular.module('biblioteca').controller('AutorController', function($scope, $http, cadastroDeAutor, recursoAutor) {
		
	$scope.autor = {};
	$scope.mensagem = '';

		$http.get('/v1/autor')
			.success(function(autor) {
			$scope.autores = autor;
		})
		.error(function(erro) {
			console.log(erro);
		});

	cadastrar = function(autor) {
		cadastroDeAutor.cadastrar(autor)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.autor = {};
			})
			.catch(function(erro) {
				$scope.mensagem = erro.mensagem;
			});	
		};

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			var autor = $scope.autor;
			cadastrar(autor);
			}else{
			$scope.mensagem = 'Formulario invalido';
			};
		};
	});