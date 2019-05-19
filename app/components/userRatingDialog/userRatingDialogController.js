bookBoxApp.controller("anonymousUserDialogCtrl", ['$scope',
                                                  'anonymousUserDialogService',
                                                  function($scope, anonymousUserDialogService){
    $scope.bookForReview;
    $scope.reviews=[];
    $scope.init = function(){
      $scope.bookForReview=anonymousUserDialogService.getBookReviewed();
      $scope.reviews= anonymousUserDialogService.getBookReviews();   
    }
    $scope.init();
}])