bookBoxApp.controller("anonymousUserDialogCtrl", ['$scope',
                                                  'anonymousUserDialogService',
                                                  'userManagementService',
                                                  'anonymousBookService',
                                                  function($scope, anonymousUserDialogService, userManagementService,anonymousBookService){
    $scope.bookForReview;
    $scope.rating=1;                                                  
    $scope.reviews=[];
    $scope.stretch=true;
    $scope.writeReview=false;
    $scope.currentUser="";
    $scope.currentUserId=0;                                                  
    $scope.userReview;                                                  
    $scope.init = function(){
      $scope.bookForReview=anonymousUserDialogService.getBookReviewed();
      $scope.reviews= anonymousUserDialogService.getBookReviews();  
       var userInfo= userManagementService.getCurrentUser();
       if(userInfo){
          $scope.currentUser=userInfo.user.name;
          $scope.currentUserId=userInfo.user.userId; 
       }                            
    }
    $scope.enableWriteReview=function(){debugger;
        $scope.stretch=false;
        $scope.writeReview=true;
    }
    $scope.disableWriteReview=function(){debugger;
        $scope.stretch=true;
        $scope.writeReview=false;
    }
    $scope.submitUserReview=function(rating, userReview){debugger;
        anonymousUserDialogService.submitUserReview($scope.currentUserId,rating,userReview).
                                                success(function(data){debugger;
                                                   alert("Review Saved!");
                                                   $scope.disableWriteReview();
                                                   $scope.getReviewsFromServer();
                                                   $scope.reviews= anonymousUserDialogService.getBookReviews();  
                                                }).
                                                error(function(error){debugger;
                                                    alert(error.errorMsg);
                                                });
    };
    
    $scope.getReviewsFromServer=function(){
        anonymousBookService.getReviewsForBook($scope.bookForReview.bookId).
             success(function(reviews){
                anonymousUserDialogService.setBookReviews(reviews); 
                }).
             error(function(error){alert("Error!");});
    }
    $scope.onRatingChanged=function(){
        console.log($scope.rating);
    }
    $scope.init();
}])