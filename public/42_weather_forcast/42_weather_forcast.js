var app = angular.module('app',['ngRoute', 'ngResource'])


// Services
.service('cityService', function(){
	this.city = 'New York, NY';
})


// Controllers
.controller('homeCtrl',[
'$scope', 'cityService', '$location',
function($scope, cityService, $location){
	$scope.title = "Home";
	$scope.city = cityService.city;
	$scope.$watch('city', function(){
		cityService.city = $scope.city;
	});
	//redirect when form submit
	$scope.submit = function(){
		$location.url('/forecast');
	}
}])

.controller('forecastCtrl',[
'$scope', 'cityService',
function($scope, cityService){
	$scope.title = "Forecast";
	$scope.city = cityService.city;
}])



// Routes

.config([
'$routeProvider', '$locationProvider',
function($routeProvider, $locationProvider){
	$routeProvider
	.when('/', {
		templateUrl: 'partials/home.html',
		controller: 'homeCtrl'
	})
	.when('/forecast', {
		templateUrl: 'partials/forecast.html',
		controller: 'forecastCtrl'
	})
}])


;