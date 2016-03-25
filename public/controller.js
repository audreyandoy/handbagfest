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
}])
.controller('NavCtrl', ['$scope', 'Auth', '$state', function($scope, Auth, $state) {
  $scope.Auth = Auth;

  $scope.logout = function() {
     Auth.removeToken();
     $state.reload();
  }
}])
.controller('SignupCtrl', ['$scope', '$http', '$location', function(
  $scope, $http, $location) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userSignup = function() {
    $http.post('/api/users', $scope.user).then(function success(res) {
      $location.path('/bags');
    }, function error(res) {
      console.log(res);
    });
  }
}])
.controller('LoginCtrl', ['$scope', '$http', '$location', 'Auth', 
  function($scope, $http, $location, Auth) {
  $scope.user = {
    email: '',
    password: ''
  };
  $scope.userLogin = function() {
    $http.post('/api/auth', $scope.user).then(function success(res) {
      Auth.saveToken(res.data.token);
      $location.path('/bags');
    }, function error(res) {
      console.log(res);
    })
  }
}])