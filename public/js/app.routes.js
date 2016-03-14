// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])

// configure our routes
	.config(function($routeProvider, $locationProvider) {
		$routeProvider
	// route for the home page
	.when('/', { templateUrl : 'views/pages/home.html' })
	// route for the stories page
	.when('/stories', { templateUrl : 'views/pages/stories.html' })
	// route for the ruth's story
	.when('/stories/story_of_ruth', { templateUrl : 'views/pages/story_of_ruth.html' })
	// route for the ruth's story
	.when('/stories/getting_somewhere', { templateUrl : 'views/pages/getting_somewhere.html' })
	// route for the calabash kids story
	.when('/stories/calabash_kids', { templateUrl : 'views/pages/stories/calabash_kids.html' })
	// route for the proud_princes story
	.when('/stories/proud_princes', { templateUrl : 'views/pages/stories/proud_princes.html' })
	// route for the kings_daughters story
	.when('/stories/kings_daughters', { templateUrl : 'views/pages/stories/kings_daughters.html' })
	// route for the tortoise_dog_farmer story
	.when('/stories/tortoise_dog_farmer', { templateUrl : 'views/pages/stories/tortoise_dog_farmer.html' })
	// route for the cheetah_and_lazy_hunter story
	.when('/stories/cheetah_and_lazy_hunter', { templateUrl : 'views/pages/stories/cheetah_and_lazy_hunter.html' })
	// route for the baby_mouse_and_baby_snake story
	.when('/stories/baby_mouse_and_baby_snake', { templateUrl : 'views/pages/stories/baby_mouse_and_baby_snake.html' });
	
	// set our app up to have pretty URLS
	$locationProvider.html5Mode(true);
});
