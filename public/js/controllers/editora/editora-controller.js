angular.module('biblioteca').controller('EditoraController', function($scope, $http, cadastroDeEditora, recursoEditora) {
		
	$scope.mensagem = '';
	$scope.editora = {};

	$http.get('/v1/editora')
			.success(function(editora) {
			$scope.editoras = editora;
		})
		.error(function(erro) {
			console.log(erro);
		});

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