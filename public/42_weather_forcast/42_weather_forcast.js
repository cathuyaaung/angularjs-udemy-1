var app = angular.module('app',['ngRoute', 'ngResource'])

//appid=7e1da41a347a522f714c1375ffc12ddc
// http://www.openweathermap.org
// http://api.openweathermap.org/data/2.5/forecast?appid=7e1da41a347a522f714c1375ffc12ddc&q=London&cnt=2

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
'$scope', 'cityService', '$resource', '$routeParams',
function($scope, cityService, $resource, $routeParams){
	$scope.title = "Forecast";
	$scope.city = cityService.city;

	$scope.days = $routeParams.days || 2;

	$scope.weatherAPI = 
		$resource("http://api.openweathermap.org/data/2.5/forecast/daily", 
		{
			callback: "JSON_CALLBACK"
		},{
			get: { method: "JSONP" }
		});

	$scope.weatherResult = $scope.weatherAPI.get( 
		{ 
			q: $scope.city, 
			cnt: $scope.days, 
			appid: '7e1da41a347a522f714c1375ffc12ddc' 
		} );

	console.log($scope.weatherResult);

	$scope.convertToFahrenheit = function(degK){
		return Math.round( (1.8 * (degK - 273)) + 32 );
	}

	$scope.convertToDate = function(dt){
		return new Date(dt * 1000);
	}



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
	.when('/forecast/:days', {
		templateUrl: 'partials/forecast.html',
		controller: 'forecastCtrl'
	})
}])



// Directives

.directive('weatherReport', [

function(){
	return {
		templateUrl: 'directives/weatherreport.html',
		replace: true,
		scope: {
			weatherDay: '=',
			convertToDate: '&',
			convertToStandard: '&',
			dateFormat: "@"
		},
		link: function(scope, elements, attrs){
			console.log(scope);
		}
	}
}])

;