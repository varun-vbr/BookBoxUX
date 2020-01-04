
           bookBoxApp.controller("categoryListingCtrl", ['$scope',
                                                         '$location',
                                                         '$route',
                                                         'categoryListingService',
                                                         'userManagementService',
                                                         'anonymousToolBarService',
                                                         'anonymousCategoryService',
                                                        
                function($scope,$location,$route,categoryListingService,userManagementService, anonymousToolBarService,anonymousCategoryService){

                        $scope.searchText;
                        $scope.selectedItem;
                        $scope.selectedType='None';
                        $scope.categoryDetails=[{categoryId:1,name:'Action and Adventure',localImageUrl:'/Action and Adventure_256.png'},
                                                {categoryId:2,name:'Autobiographies and Biographies',localImageUrl:'/AutoBiographies and Biographies_256.png'},
                                                {categoryId:3,name:'Business and Economics',localImageUrl:'/Business and Economics_256.png'},
                                                {categoryId:4,name:'Computing',localImageUrl:'/Computing_256.png'},
                                                {categoryId:5,name:'Healthy Living',localImageUrl:'/Healthy Living_256.png'},
                                                {categoryId:6,name:'Humour',localImageUrl:'/Humour_256.png'},
                                                {categoryId:7,name:'Personal Development',localImageUrl:'/Personal Development_256.png'},
                                                {categoryId:8,name:'Romance',localImageUrl:'/Romance_256.png'},
                                                {categoryId:9,name:'Science and Technology',localImageUrl:'/Science and Technology1_256.png'},
                                                {categoryId:10,name:'Science Fiction',localImageUrl:'/Science Fiction2_256.png'},
                                                {categoryId:11,name:'Sports',localImageUrl:'/Sports2_256.png'},
                                                {categoryId:12,name:'Travel',localImageUrl:'/Travel_256.png'}];
                       
                       
                    
                        $scope.goToCategoryPage=function(categoryId, categoryName){debugger;
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
              
               



                }]);


