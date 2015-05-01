var controllers = angular.module('UserControllers', []);

controllers.controller('MainCtrl',
	['$scope', '$http',
		function ($scope, $http) {
			$http.get('http://localhost/api/GetUsers')
			.success(function (response) {
				$scope.users = response;
			});
		}
	]
);

controllers.controller('CreateCtrl',
	['$scope', '$http', '$location',
		function ($scope, $http, $location) {
		    $scope.save = function () {                
				var data = {
					FirstName: $scope.user.FirstName,
					LastName: $scope.user.LastName,
					Email: $scope.user.Email,
					Age: $scope.user.Age
				};
				$http.post('http://localhost/api/AddUser/', data)
				.success(function (response) {
					$location.path("/");
				});
				$scope.user.FirstName = "";
				$scope.user.LastName = "";
				$scope.user.Email = "";
				$scope.user.Age = "";
			};
		}
	]
);

controllers.controller('EditCtrl',
	['$scope', '$http', '$routeParams', '$location',
		function ($scope, $http, $routeParams, $location) {		
			$http.get('http://localhost/api/GetUser/' + $routeParams.Id)
			.success(function (response) {
				$scope.user = response;
			})
			.error(function (response) {
				alert(response);
			});	  

			$scope.delete = function (id) {
				if (confirm("Do you wish to delete this user?")) {
					$http.delete('http://localhost/api/DeleteUser/' + id)
					.success(function (response) {
						$location.path("/");
					});
				}
			};
		}
	]
);