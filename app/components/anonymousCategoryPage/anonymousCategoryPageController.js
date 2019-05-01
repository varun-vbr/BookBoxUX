    bookBoxApp.controller("anonymousCategoryPageCtrl",     
                          ['$scope',
                           '$location',
                           'anonymousCategoryService',
                           'userManagementService',
                           'anonymousBookService',
                           function($scope,$location,anonymousCategoryService,userManagementService,anonymousBookService){
                               $scope.searchText;
                               $scope.selectedItem;
                               $scope.selectedType='None';
                               $scope.categoryDetails={name:'',books:[]}; 
                               $scope.init=function(){debugger;
                                   $scope.categoryDetails=anonymousCategoryService.getCategoryDetails();
                               }
                               $scope.init();
                               $scope.goToAnonymousBookPage=function(book){
                                     anonymousBookService.setBookToDisplay(book);
                                     $location.path("/bookDetails");
                                }
         
    }])