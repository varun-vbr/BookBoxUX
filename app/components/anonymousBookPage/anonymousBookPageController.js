    bookBoxApp.controller(
        "anonymousBookPageCtrl",
        ['$scope',
         '$location',
         '$route',
        'anonymousBookService',
        'userManagementService',
        'searchBoxService',
        'anonymousCategoryService',
        'anonymousToolBarService',
    function($scope,$location,$route,anonymousBookService,userManagementService,searchBoxService,anonymousCategoryService, anonymousToolBarService){
         $scope.searchText;
         $scope.selectedItem;
         $scope.selectedType='None';
         $scope.readOnly=true;
         $scope.rating=0;
         $scope.reviewCount;
         $scope.init=function(){
             $scope.bookOnDisplay=anonymousBookService.getBookToDisplay();
             $scope.rating=$scope.bookOnDisplay.averageRating;
             $scope.reviewCount=anonymousBookService.getReviewCount();
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
         $scope.init();
    }])