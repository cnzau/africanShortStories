// name our angular app
angular.module('shortStories', ['routerRoutes'])
.controller('mainController', function() {
})
.controller('storiesController', function() {
	var dir = '../views/pages';
	var _getAllFilesFromFolder = function(dir) {

	    var filesystem = require("fs");
	    var results = [];

	    filesystem.readdirSync(dir).forEach(function(file) {

	        file = dir+'/'+file;
	        var stat = filesystem.statSync(file);

	        if (stat && stat.isDirectory()) {
	            results = results.concat(_getAllFilesFromFolder(file))
	        } else results.push(file);

	    });

	    return results;

	};
});
