bookBoxApp.controller("loggedInNavBarCtrl",["$scope","$location","$route","loggedInNavBarService",
                                                                          "userManagementService",
                                                                          function($scope, 
                                                                                   $location, 
                                                                                   $route,
                                                                                   loggedInNavBarService,
                                                                                   userManagementService){
                              $scope.signOut=function(){
                                  $location.path("/");
                                  userManagementService.setCurrentUser(undefined);
                              }  
    
}])