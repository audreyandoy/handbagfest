angular.module("BagCtrls", [])
.controller("AllBagsCtrl", ["$scope", "$http", function($scope, $http) {
	$scope.bags = [];

	$http({ method: "GET", url:"/api/bags"}).then(function success(res) {
		console.log(res)
		$scope.bags = res.data;
	}, function error(res) {
		console.log(res);
	});
	// Bag.query(function success(data) {
	// 	$scope.bags = data;
	// }, function error(data) {
	// 	console.log(data);
	// });

}]);