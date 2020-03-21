    bookBoxApp.controller("historyCtrl",     
                          ['$scope',
                           '$location',
                           '$mdDialog',
                           'historyService',
                           'userManagementService',
                           'anonymousBookService',
                           'anonymousUserDialogService',
                           'searchBoxService',
                           'anonymousCategoryService',
                           function($scope,$location,$mdDialog, historyService,userManagementService,anonymousBookService,anonymousUserDialogService,searchBoxService,anonymousCategoryService){
                               $scope.searchText;
                               $scope.selectedItem;
                               $scope.selectedType='None';
                               $scope.currentUser=userManagementService.getCurrentUser().user.name;
                               
                               
                               $scope.getReviewCountPerBook=function(bookId,index){
                                  anonymousBookService.getReviewCountFromServer(bookId).
                                  success(function (reviewCount) {debugger;
                                                $scope.currentBookList[index].book.reviewCount=reviewCount;     
                                                                                  
                                              }).
                                             error(function(error){alert("Error!");});
                               }
                               
                               $scope.populateReviewCounts=function(currentBookList){
                                   for(var i=0; i<currentBookList.length; i++){
                                      $scope.getReviewCountPerBook(currentBookList[i].book.bookId, i); 
                                   }
                               }
                               
                               $scope.goToBookPage=function(book){
                                       anonymousBookService.getReviewCountFromServer(book.bookId).
                                       success(function(count){
                                       anonymousBookService.setBookToDisplay(book);
                                       anonymousBookService.setReviewCount(count);          
                                       $location.path("/bookDetails");
                                       }).error(function(error){alert("Error!")});
                               }
                               
                               $scope.goToAuthorPage=function(authorName){
                                 searchBoxService.getSearchSuggestions(authorName,"Author").
                                 success(function(bookList){
                                     var categoryDetails={name:'Books By '+authorName, books:bookList};
                                     anonymousCategoryService.setCategoryDetails(categoryDetails);
                                     $location.path("/categories");
                                 }).
                                 error(function(error){alert("Error!");});
                             }

                              $scope.goToPublisherPage=function(publisherName){
                                 searchBoxService.getSearchSuggestions(publisherName,"Publisher").
                                 success(function(bookList){
                                     var categoryDetails={name:'Books By '+publisherName, books:bookList};
                                     anonymousCategoryService.setCategoryDetails(categoryDetails);
                                     $location.path("/categories");
                                 }).
                                 error(function(error){alert("Error!");});
                             }
                               
                               
                               
                               
                               $scope.getUserHistory=function(){
                                   historyService.getUserHistory($scope.currentUser).
                                             success(function (currentBookList) {debugger;
                                                     $scope.currentBookList=currentBookList;
                                                     $scope.historyCount=$scope.currentBookList.length
                                                     $scope.populateReviewCounts(currentBookList);                             
                                              }).
                                             error(function(error){alert("Error!");});
                               }
                               
                               $scope.showUserReviewDialog=function(ev, book){
                                     anonymousBookService.getReviewsForBook(book.bookId).
                                     success(function(reviews){debugger;
                                        anonymousUserDialogService.setBookReviewed(book);
                                        anonymousUserDialogService.setBookReviews(reviews); 
                                        $mdDialog.show({
                                          controller: 'anonymousUserDialogCtrl',
                                          templateUrl: '/BookBox/BookBoxUX/app/dialogs/userRatingDialog/userRatingDialog.html',
                                          parent: angular.element(document.body),
                                          targetEvent: ev,
                                          clickOutsideToClose:true,
                                        })}).
                                     error(function(error){alert("Error!");});
                               }
                               
                               $scope.init=function(){
                                   $scope.getUserHistory();
                               }
                               
                               $scope.init();
                               
         
    }])