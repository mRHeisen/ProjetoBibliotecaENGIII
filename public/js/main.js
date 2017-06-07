angular.module('biblioteca', ['ngAnimate', 'ngRoute', 'ngResource', 'meusServicos', 'ui.bootstrap', 'ngSanitize', 'ngCkeditor'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$routeProvider.when('/newobra', {
			templateUrl: 'partials/formularios/cadastroObra.html',
			controller: 'ObraController'
		});

		$routeProvider.when('/obras', {
			templateUrl: 'partials/views/listaObra.html',
			controller: 'ListaObrasController'
		});

		$routeProvider.when('/obras/edit/:obraId', {
			templateUrl: 'partials/formularios/cadastroObra.html',
			controller: 'ObraController'
		});
		
		$routeProvider.when('/neweditora', {
			templateUrl: 'partials/formularios/cadastroEditora.html',
			controller: 'EditoraController'
		});

		$routeProvider.when('/newautor', {
			templateUrl: 'partials/formularios/cadastroAutor.html',
			controller: 'AutorController'
		});

		$routeProvider.when('/newgenero', {
			templateUrl: 'partials/formularios/cadastroGenero.html',
			controller: 'GeneroController'
		});

		$routeProvider.otherwise({redirectTo: '/obras'});

	});