    bookBoxApp.controller("anonymousBookPageCtrl",['$scope','anonymousBookService','userManagementService',function($scope,anonymousBookService,userManagementService){
         $scope.searchText;
         $scope.selectedItem;
         $scope.selectedType='None';
         $scope.readOnly=true;
         $scope.rating=0;
         $scope.init=function(){
             $scope.bookOnDisplay=anonymousBookService.getBookToDisplay();
             $scope.rating=$scope.bookOnDisplay.averageRating;
         }
         $scope.init();
    }])