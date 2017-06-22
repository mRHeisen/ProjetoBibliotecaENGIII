angular.module('biblioteca').controller('EmprestimoController', function($scope, $http, $routeParams, cadastroDeEmprestimo, recursoEmprestimo) {
		
	$scope.mensagem = '';
	$scope.emprestimo = {};

	if($routeParams.emprestimoId) {
				recursoEmprestimo.get({emprestimoId: $routeParams.emprestimoId}, function(emprestimo) {
				$scope.emprestimo = emprestimo;
				}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o emprestimo'
				});
		};

	cadastrar = function(emprestimo) {
		cadastroDeEmprestimo.cadastrar(emprestimo)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.emprestimo = {};
			})
			.catch(function(erro) {
				$scope.mensagem = erro.mensagem;
			});	
		};

	$scope.submeter = function() {
		if ($scope.formulario.$valid) {
			var emprestimo = $scope.emprestimo;
			cadastrar(emprestimo);
			}else{
			$scope.mensagem = 'Formulario invalido';
			};
		};
	});