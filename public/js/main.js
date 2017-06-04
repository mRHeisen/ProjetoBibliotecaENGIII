angular.module('biblioteca', ['ngAnimate', 'ngRoute', 'ngResource', 'meusServicos', 'ui.bootstrap', 'ngSanitize', 'ngCkeditor'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$routeProvider.when('/cadastro', {
			templateUrl: 'partials/CadastroObra.html',
			controller: 'CadastroObraController'
		});

		$routeProvider.when('/lista', {
			templateUrl: 'partials/ListaObra.html',
			controller: 'CadastroObraController'
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});