    bookBoxApp.controller("anonymousCategoryPageCtrl",     
                          ['$scope',
                           'anonymousCategoryService',
                           'userManagementService',
                           function($scope,anonymousCategoryService,userManagementService){
                               $scope.categoryDetails={name:'',books:[]}; 
                               $scope.init=function(){debugger;
                                   $scope.categoryDetails=anonymousCategoryService.getCategoryDetails();
                               }
                               $scope.init();
         
    }])