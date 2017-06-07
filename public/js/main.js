angular.module('biblioteca', ['ngAnimate', 'ngRoute', 'ngResource', 'meusServicos', 'ui.bootstrap', 'ngSanitize', 'ngCkeditor'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$routeProvider.when('/newobra', {
			templateUrl: 'partials/formularios/CadastroObra.html',
			controller: 'ObraController'
		});

		$routeProvider.when('/obras', {
			templateUrl: 'partials/views/ListaObra.html',
			controller: 'ListaObrasController'
		});

		$routeProvider.when('/obras/edit/:obraId', {
			templateUrl: 'partials/formularios/CadastroObra.html',
			controller: 'ObraController'
		});
		
		$routeProvider.when('/neweditora', {
			templateUrl: 'partials/formularios/CadastroEditora.html',
			controller: 'EditoraController'
		});

		$routeProvider.when('/newautor', {
			templateUrl: 'partials/formularios/CadastroAutor.html',
			controller: 'AutorController'
		});

		$routeProvider.when('/newgenero', {
			templateUrl: 'partials/formularios/CadastroGenero.html',
			controller: 'GeneroController'
		});

		$routeProvider.otherwise({redirectTo: '/obras'});

	});