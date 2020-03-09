    bookBoxApp.controller("historyCtrl",     
                          ['$scope',
                           '$location',
                           'historyService',
                           'userManagementService',
                           function($scope,$location,historyService,userManagementService){
                               $scope.searchText;
                               $scope.selectedItem;
                               $scope.selectedType='None';
                               
         
    }])