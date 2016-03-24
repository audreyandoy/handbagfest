var app = angular.module("BagsApp", ["ui.router", "ui.bootstrap"]);

app.config([
	"$stateProvider",
	"$urlRouterProvider",
	"$locationProvider",
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/404');

		$stateProvider
		.state("bags", {
			url: "/bags",
			templateUrl: "app/views/showBags.html"
		});

		$locationProvider.html5Mode(true);
	}
])