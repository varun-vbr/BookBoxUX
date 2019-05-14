bookBoxApp.controller("anonymousUserDialogCtrl", ['$scope','anonymousUserDialogService',function($scope, anonymousUserDialogService){
    $scope.bookForReview;
    $scope.init = function(){
      $scope.bookForReview=anonymousUserDialogService.getBookReviewed();  
    }
    $scope.init();
}])