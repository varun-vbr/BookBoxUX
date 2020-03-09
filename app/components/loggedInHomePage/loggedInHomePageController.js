bookBoxApp.controller("loggedInHomePageCtrl",['$scope','$location',
                                              'userManagementService','anonymousBookService',
                                             function($scope, $location, userManagementService, anonymousBookService){
                                                 $scope.searchText;
                                                 $scope.selectedItem;
                                                 $scope.selectedType='None';
                                                 $scope.currentReads=[];
                                                 $scope.currentUser="";
                                                 $scope.currentUserId=0;
                
                                                 $scope.userInfo={};
                                                 $scope.init=function(){debugger;
                                                    $scope.userInfo=userManagementService.getCurrentUser();
                                                    for(var i=0; i< $scope.userInfo.currentReads.length; i++){
                                                        $scope.currentReads.push($scope.userInfo.currentReads[i].book)
                                                    }  
                                                    if($scope.userInfo.user){
                                                        $scope.currentUser=$scope.userInfo.user.name;
                                                        $scope.currentUserId=$scope.userInfo.user.userId;
                                                    }                      
                                                    $scope.booksLoaded=true;                    
                                                     
                                                 }
                                                 $scope.init();
                                                 
                                                 $scope.goToAnonymousBookPage=function(book){
                                                       anonymousBookService.getReviewCountFromServer(book.bookId).
                                                       success(function(count){
                                                       anonymousBookService.setBookToDisplay(book);
                                                       anonymousBookService.setReviewCount(count);          
                                                       $location.path("/bookDetails");
                                                       }).error(function(error){alert("Error!")});
                                                   }
                                             }])