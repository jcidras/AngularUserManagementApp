var app = angular.module('app', ['ngRoute', 'UserControllers']);

app.config(
	['$routeProvider',
		function ($routeProvider) {
		    $routeProvider
			.when('/list', {
			    templateUrl: 'templates/list.html',
			    controller: 'MainCtrl'
			})
			.when('/new', {
			    templateUrl: 'templates/edit.html',
			    controller: 'CreateCtrl'
			})
			.when('/edit/:Id', {
			    templateUrl: 'templates/edit.html',
			    controller: 'EditCtrl'
			})
			.otherwise({
			    redirectTo: '/list'
			});
		}
	]
);