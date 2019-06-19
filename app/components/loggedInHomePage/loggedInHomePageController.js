bookBoxApp.controller("loggedInHomePageCtrl",['$scope',
                                              'userManagementService',
                                             function($scope, userManagementService){
                                                 $scope.userInfo={};
                                                 $scope.init=function(){
                                                    $scope.userInfo=userManagementService.getCurrentUser();
                                                 }
                                                 $scope.init();
                                             }])