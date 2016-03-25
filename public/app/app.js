var app = angular.module("BagsApp", ["ui.router", "ui.bootstrap", "BagCtrls"]);

app.config([
	"$stateProvider",
	"$urlRouterProvider",
	"$locationProvider",
	function($stateProvider, $urlRouterProvider, $locationProvider) {
		$urlRouterProvider.otherwise('/404.html');

		$stateProvider
		.state("home", {
			url: "/",
			templateUrl: "app/views/home.html",
		})
		.state("bags", {
			url: "/bags",
			templateUrl: "app/views/bags.html",
			controller: "AllBagsCtrl"
		})
		.state("bagFavs", {
			url: "/favorites",
			templateUrl: "app/views/bagFavs.html",
			controller: "FavBags"
		})
		.state('signup', {
    url: '/signup',
    templateUrl: 'app/views/signup.html',
    controller: 'SignupCtrl'
  	})
  	.state('login', {
    url: '/login',
    templateUrl: 'app/views/login.html',
    controller: 'LoginCtrl'
  	})
  	.state('404', {
    url: '/404',
    templateUrl: 'app/views/404.html'
  	});

		$locationProvider.html5Mode(true);
	}
])