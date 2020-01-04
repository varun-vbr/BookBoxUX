    bookBoxApp.controller(
        "anonymousBookPageCtrl",
        ['$scope',
         '$location',
         '$route',
         '$mdDialog',
        'anonymousBookService',
        'userManagementService',
        'searchBoxService',
        'anonymousCategoryService',
        'anonymousToolBarService',
        'anonymousUserDialogService',
    function($scope,$location,$route,$mdDialog,anonymousBookService,userManagementService,searchBoxService,anonymousCategoryService, anonymousToolBarService,anonymousUserDialogService){
         $scope.searchText;
         $scope.selectedItem;
         $scope.selectedType='None';
         $scope.readOnly=true;
         $scope.rating=0;
         $scope.reviewCount;
         $scope.currentUser="";
         $scope.init=function(){
             var userInfo= userManagementService.getCurrentUser();
             $scope.bookOnDisplay=anonymousBookService.getBookToDisplay();
             $scope.rating=$scope.bookOnDisplay.averageRating;
             $scope.reviewCount=anonymousBookService.getReviewCount();
             if(userInfo){
                $scope.currentUser=userInfo.user.name;
            }
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
         
         $scope.goToCategoriesPage=function(categoryId, categoryName){debugger;
             anonymousToolBarService.getCategoryBooks(categoryId).
             success(function (bookList) {debugger
             anonymousCategoryService.setCategoryDetails({name:categoryName, books:bookList});
             if($location.path()=="/categories"){
                $route.reload();
             }
             else{
                $location.path("/categories");
             }           
             }).
             error(function(error){alert("Error!");});
                                                                                
                                         
        }
         
         $scope.showAnonymousReviewDlg = function(ev) {
             anonymousBookService.getReviewsForBook($scope.bookOnDisplay.bookId).
             success(function(reviews){debugger;
                anonymousUserDialogService.setBookReviewed($scope.bookOnDisplay);
                anonymousUserDialogService.setBookReviews(reviews); 
                $mdDialog.show({
                  controller: 'anonymousUserDialogCtrl',
                  templateUrl: '/BookBox/BookBoxUX/app/components/userRatingDialog/userRatingDialog.html',
                  parent: angular.element(document.body),
                  targetEvent: ev,
                  clickOutsideToClose:true,
                })}).
             error(function(error){alert("Error!");});
                
       };
         $scope.init();
    }])