angular.module('biblioteca').controller('EmprestimoController', function($scope, $http, $routeParams, cadastroDeEmprestimo, recursoEmprestimo) {
		
	$scope.mensagem = '';
	$scope.emprestimo = {};
	$scope.obras = [];
		$http.get('/v1/obra')
		.success(function(obra) {
		$scope.obras = obra;
		})
		.error(function(erro) {
		console.log(erro);
		});
	$scope.operadores = [];
		$http.get('/v1/operador')
		.success(function(operador) {
		$scope.operadores = operador;
		console.log($scope.operadores[0].nome);
		})
		.error(function(erro) {
		console.log(erro);
		});

	if($routeParams.emprestimoId) {
				recursoEmprestimo.get({emprestimoId: $routeParams.emprestimoId}, function(emprestimo) {
				$scope.emprestimo = emprestimo;
				}, function(erro) {
				console.log(erro);
				$scope.mensagem = 'Não foi possível obter o emprestimo'
				});
		};

	cadastrar = function(emprestimo) {
		emprestimo.situacao = false;
		cadastroDeEmprestimo.cadastrar(emprestimo)
			.then(function(dados) {
				$scope.mensagem = dados.mensagem;
				if (dados.inclusao) $scope.emprestimo = {};
			})
			.catch(function(erro) {
				$scope.mensagem = erro.mensagem;
			});	
		};
	entregue = function(emprestimo) {
		console.log("fdasdasdsa");
		emprestimo.situacao = true;
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