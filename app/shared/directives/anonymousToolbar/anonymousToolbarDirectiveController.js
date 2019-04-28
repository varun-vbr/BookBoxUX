bookBoxApp.controller("anonymousHeaderCtrl",
                      ['$scope',
                       '$location',
                       'anonymousToolBarService',
                       'anonymousCategoryService',
                        function($scope,$location,anonymousToolBarService,anonymousCategoryService){
                            
                              $scope.goToCategoriesPage=function(categoryId, categoryName){debugger;
                                         $location.path("/categories");
                              }
               
}])