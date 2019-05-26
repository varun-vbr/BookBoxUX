bookBoxApp.controller('loginPageCtrl',['$scope',
                                       'userManagementService',
                                       'loginPageService',
                                       function($scope,userManagementService, loginPageService){
                                            $scope.username;
                                            $scope.password;
                                       }])              