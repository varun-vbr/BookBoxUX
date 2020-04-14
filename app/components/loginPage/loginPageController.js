bookBoxApp.controller('loginPageCtrl',['$scope',
                                       'userManagementService',
                                       'bookReaderService',
                                       'loginPageService',
                                       '$location',
                                       function($scope,
                                                 userManagementService,
                                                 bookReaderService,
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
                                                success(function(user){debugger;
                                                    var userPath=userManagementService.getUserPath();
                                                    var userBook=userManagementService.getUserBook();
                                                    if(userPath && userBook){
                                                        userManagementService.setCurrentUser(user);
                                                        bookReaderService.setBookToRead(userBook);
                                                        $location.path(userPath);
                                                    }
                                                    else{
                                                        userManagementService.setCurrentUser(user);
                                                        $location.path('/loggedin');
                                                    }
                                                    
                                                }).
                                                error(function(error){debugger;
                                                    alert(error.errorMsg);
                                                });
                                            }
                                       }])              