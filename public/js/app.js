// name our angular app
angular.module('shortStories', [])
.controller('mainController', function() {
	// bind this to vm (view-model)
	var vm = this;
	// define variables and objects on this
	// this lets them be available to our views
	// define a basic variable
	vm.message = 'Hey there! Welcome to our stories page!';
});