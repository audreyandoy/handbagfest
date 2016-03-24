var app = angular.module("BagsApp", ["ui.router", "ui.bootstrap", "BagCtrls"]);

app.config([
	"$stateProvider",
	"$urlRouterProvider",
	"$locationProvider",
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/404');

		$stateProvider
		.state("bags", {
			url: "/bags",
			templateUrl: "app/views/bags.html",
			controller: "AllBagsCtrl"
		});

		$locationProvider.html5Mode(true);
	}
])