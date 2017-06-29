angular.module('biblioteca', ['ngAnimate', 'ngRoute', 'ngResource', 'meusServicos', 'ui.bootstrap', 'ngSanitize', 'ngCkeditor'])
	.config(function($routeProvider, $locationProvider, $httpProvider) {

		$routeProvider.when('/newobra', {
			templateUrl: 'partials/formularios/cadastroObra.html',
			controller: 'ObraController'
		});

		$routeProvider.when('/obras', {
			templateUrl: 'partials/views/ListaObra.html',
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

		$routeProvider.when('/editoras', {
			templateUrl: 'partials/views/ListaEditora.html',
			controller: 'ListaEditorasController'
		});

		$routeProvider.when('/editora/edit/:editoraId', {
			templateUrl: 'partials/formularios/cadastroEditora.html',
			controller: 'EditoraController'
		});

		$routeProvider.when('/newautor', {
			templateUrl: 'partials/formularios/cadastroAutor.html',
			controller: 'AutorController'
		});

		$routeProvider.when('/autores', {
			templateUrl: 'partials/views/ListaAutor.html',
			controller: 'ListaAutoresController'
		});

		$routeProvider.when('/autore/edit/:autorId', {
			templateUrl: 'partials/formularios/cadastroAutor.html',
			controller: 'AutorController'
		});

		$routeProvider.when('/newgenero', {
			templateUrl: 'partials/formularios/cadastroGenero.html',
			controller: 'GeneroController'
		});

		$routeProvider.when('/generos', {
			templateUrl: 'partials/views/ListaGenero.html',
			controller: 'ListaGenerosController'
		});

		$routeProvider.when('/genero/edit/:generoId', {
			templateUrl: 'partials/formularios/cadastroGenero.html',
			controller: 'GeneroController'
		});

		$routeProvider.when('/newoperador', {
			templateUrl: 'partials/formularios/cadastroOperador.html',
			controller: 'OperadorController'
		});

		$routeProvider.when('/operadores', {
			templateUrl: 'partials/views/ListaOperador.html',
			controller: 'ListaOperadoresController'
		});

		$routeProvider.when('/operador/edit/:operadorId', {
			templateUrl: 'partials/formularios/cadastroOperador.html',
			controller: 'OperadorController'
		});

		$routeProvider.when('/newemprestimo', {
			templateUrl: 'partials/formularios/cadastroEmprestimo.html',
			controller: 'EmprestimoController'
		});
		$routeProvider.when('/emprestimos', {
			templateUrl: 'partials/views/ListaEmprestimos.html',
			controller: 'ListaEmprestimosController'
		});
		$routeProvider.when('/emprestimo/edit/:emprestimoId', {
			templateUrl: 'partials/views/vizualizaEmprestimo.html',
			controller: 'EmprestimoController'
		});


		$routeProvider.otherwise({redirectTo: '/obras'});

	});