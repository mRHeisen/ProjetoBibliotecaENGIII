angular.module('biblioteca').controller('EditoraController', function($scope, $http, cadastroDeEditora, recursoEditora) {
		
	$scope.mensagem = '';
	$scope.editora = {};

	cadastrar = function(editora) {
			cadastroDeEditora.cadastrar(editora)
				.then(function(dados) {
					$scope.mensagem = dados.mensagem;
					if (dados.inclusao) $scope.editora = {};
				})
				.catch(function(erro) {
					$scope.mensagem = erro.mensagem;
				});	
		};

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			var editora = $scope.editora;
			cadastrar(editora);
			}else{
			$scope.mensagem = 'Formulario invalido';
			};
		};
	});