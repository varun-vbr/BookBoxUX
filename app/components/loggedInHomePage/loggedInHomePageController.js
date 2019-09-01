bookBoxApp.controller("loggedInHomePageCtrl",['$scope',
                                              'userManagementService',
                                             function($scope, userManagementService){
                                                 $scope.searchText;
                                                 $scope.selectedItem;
                                                 $scope.selectedType='None';
                
                                                 $scope.userInfo={};
                                                 $scope.init=function(){
                                                    $scope.userInfo=userManagementService.getCurrentUser();
                                                 }
                                                 $scope.init();
                                             }])