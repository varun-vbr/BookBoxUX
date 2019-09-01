bookBoxApp.controller("anonymousHeaderCtrl",
                      ['$scope',
                       '$route',
                       '$location',
                       'anonymousToolBarService',
                       'anonymousCategoryService',
                       'userManagementService',
                        function($scope,$route,$location,anonymousToolBarService,anonymousCategoryService, userManagementService){
                              $scope.anonymousLogin=true;
                              $scope.currentUser="";
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
                              
                              $scope.init=function(){
                               var userInfo= userManagementService.getCurrentUser();
                                  if(userInfo){
                                      $scope.currentUser=userInfo.user.name;
                                  } 
                              }
                              $scope.init();
                              
               
}])