var app = angular.module('customDirective', []);

app.directive('optIn', function() {
	return {
		restrict: 'E',
		transclude : true,
		templateUrl : 'signupFormTemplate.html'
	}
})