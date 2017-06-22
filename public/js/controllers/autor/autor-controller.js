angular.module('biblioteca').controller('AutorController', function($scope, $routeParams, $http, cadastroDeAutor, recursoAutor) {
		
	$scope.autor = {};
	$scope.mensagem = '';

	if($routeParams.autorId) {
				recursoAutor.get({autorId: $routeParams.autorId}, function(autor) {
				$scope.autor = autor;
				}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o autor'
				});
		};

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