    bookBoxApp.controller("settingsCtrl",     
                          ['$scope',
                           '$location',
                           'settingsService',
                           'userManagementService',
                           function($scope,$location,settingsService,userManagementService){
                               $scope.searchText;
                               $scope.selectedItem;
                               $scope.selectedType='None';
                               $scope.selected=true;
                               $scope.preferredCategories=[];
                               $scope.allCategories=[{categoryId:1, categoryName:'Action and Adventure', selection:false},
                                                     {categoryId:2, categoryName:'Autobiographies and Biographies', selection:false},
                                                     {categoryId:3, categoryName:'Business and Economics', selection:false},
                                                     {categoryId:4, categoryName:'Computing', selection:false},
                                                     {categoryId:5, categoryName:'Healthy Living', selection:false},
                                                     {categoryId:6, categoryName:'Humour', selection:false},
                                                     {categoryId:7, categoryName:'Personal Development', selection:false},
                                                     {categoryId:8, categoryName:'Romance', selection:false},
                                                     {categoryId:9, categoryName:'Science and Technology', selection:false},
                                                     {categoryId:10,categoryName:'Science Fiction', selection:false},
                                                     {categoryId:11,categoryName:'Sports', selection:false},
                                                     {categoryId:12,categoryName:'Travel', selection:false}]
                               
                               
                               $scope.findCategoryById=function(id, array){
                                   for(var i=0; i<array.length; i++){
                                       if(id==array[i].categoryId){
                                           return i;
                                       }
                                   }
                                   return -1;                                          
                               }
                               
                               $scope.selectPreferredCategories=function(pfdCategories){
                                   for(var i=0; i<pfdCategories.length; i++){
                                       var idx=$scope.findCategoryById(pfdCategories[i].categoryId, $scope.allCategories);
                                       if(idx>-1){
                                           $scope.allCategories[idx].selection=true;
                                       }
                                   }
                               }
                               
                               $scope.getPfdCategorySelArray=function(pfdCategories){
                                   for(var i=0; i<pfdCategories.length;i++){
                                       var pfdCat={userId:pfdCategories[i].user.userId, categoryId:pfdCategories[i].category.categoryId, categoryName:pfdCategories[i].category.categoryName};
                                       $scope.preferredCategories.push(pfdCat);
                                       
                                   }
                                   $scope.selectPreferredCategories($scope.preferredCategories);
                               }
                               
                               $scope.listPreferredCategoriesFromServer=function(username){
                                   settingsService.getAllPfdCategoriesForUser(username).
                                   success(function(pfdCategories){
                                     $scope.getPfdCategorySelArray(pfdCategories);  
                                   }).
                                   error(function(error){
                                       alert('failure');
                                   })
                               }
                               
                               $scope.togglePfdCategory=function(selection,categoryId){
                                   if(selection){
                                       settingsService.addPreferredCategory($scope.user.userId,categoryId).
                                       success(function(data){}).
                                       error(function(error){alert("error")});
                                   }
                                   else{
                                       settingsService.removePreferredCategory($scope.user.userId,categoryId).
                                       success(function(data){}).
                                       error(function(error){alert("error")});
                                   }
                               }
                               
                               $scope.accountInfoSelListener=function(){
                                  $scope.selected=true; 
                               }
                               $scope.preferredCatSelListener=function(){
                                  $scope.selected=false; 
                               }
                               
                               $scope.init=function(){debugger;
                                  var userInfo= userManagementService.getCurrentUser();
                                  if(userInfo){
                                      $scope.user=userInfo.user;
                                      $scope.listPreferredCategoriesFromServer($scope.user.username);
                                  }
                                  
                               }
                               $scope.init();
                               
         
    }])