// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
	// route for the home page
	.when('/', { templateUrl : 'views/pages/home.html' })
	// route for the stories page
	.when('/stories', {
	templateUrl : 'views/pages/stories.html',
	controller : 'aboutController',
	controllerAs: 'stories'
	});

});