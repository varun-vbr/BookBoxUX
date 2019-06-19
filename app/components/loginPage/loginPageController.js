bookBoxApp.controller('loginPageCtrl',['$scope',
                                       'userManagementService',
                                       'loginPageService',
                                       '$location',
                                       function($scope,
                                                 userManagementService, 
                                                 loginPageService,
                                                 $location){
                                            $scope.username;
                                            $scope.password;
                                            $scope.performLogin=function(username, password){
                                                var data={
                                                    inputString:username,
	                                                 password:password
                                                };
                                                var jsonString=JSON.stringify(data);
                                                loginPageService.login(jsonString).
                                                success(function(user){
                                                    userManagementService.setCurrentUser(user);
                                                    $location.path('/loggedin');
                                                }).
                                                error(function(error){debugger;
                                                    alert(error.errorMsg);
                                                });
                                            }
                                       }])              