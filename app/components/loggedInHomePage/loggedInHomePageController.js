bookBoxApp.controller("loggedInHomePageCtrl",['$scope',
                                              'userManagementService',
                                             function($scope, userManagementService){
                                                 $scope.searchText;
                                                 $scope.selectedItem;
                                                 $scope.selectedType='None';
                                                 $scope.currentReads=[];
                
                                                 $scope.userInfo={};
                                                 $scope.init=function(){debugger;
                                                    $scope.userInfo=userManagementService.getCurrentUser();
                                                    for(var i=0; i< $scope.userInfo.currentReads.length; i++){
                                                        $scope.currentReads.push($scope.userInfo.currentReads[i].book)
                                                    }                    
                                                    $scope.booksLoaded=true;                    
                                                     
                                                 }
                                                 $scope.init();
                                             }])