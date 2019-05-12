
           bookBoxApp.controller("anonymousHomeCtrl", ['$scope',
                                                       '$location',
                                                       'anonymousService',
                                                       'userManagementService',
                                                       'anonymousBookService', 
    function($scope,$location,anonymousService, userManagementService, anonymousBookService){

                $scope.searchText;
                $scope.selectedItem;
                $scope.selectedType='None';
                $scope.userInfo;

                $scope.getUserInfo=function(){debugger;
                    anonymousService.getAnonymousUserInfo().
                    success(function (users) {debugger
                        $scope.userInfo = users;
                        userManagementService.setCurrentUser(users.user);                      
                        $scope.popularBooks=users.popularBooks;
                        $scope.newBooks=users.newBooks;
                        $scope.trendingBooks=users.trendingBooks;
                        $scope.booksLoaded=true;

                     })
                    .error(function (error) {
                         alert(error);
                });
                }
                $scope.init=function(){debugger;
                   $scope.getUserInfo();

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
               
              
               




            }]);


