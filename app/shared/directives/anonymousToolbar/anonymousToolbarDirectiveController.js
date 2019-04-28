bookBoxApp.controller("anonymousHeaderCtrl",
                      ['$scope',
                       '$route',
                       '$location',
                       'anonymousToolBarService',
                       'anonymousCategoryService',
                        function($scope,$route,$location,anonymousToolBarService,anonymousCategoryService){
                            
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
               
}])