angular.module('biblioteca').controller('EditoraController', function($scope, $routeParams, $http, cadastroDeEditora, recursoEditora) {
		
	$scope.mensagem = '';
	$scope.editora = {};

	if($routeParams.editoraId) {
				recursoEditora.get({editoraId: $routeParams.editoraId}, function(editora) {
				$scope.editora = editora;
				}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter a editora'
				});
		};

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